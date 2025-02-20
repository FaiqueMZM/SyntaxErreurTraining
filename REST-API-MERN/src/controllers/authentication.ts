import express from "express";
import { getUserByEmail, createUser } from "../db/users";
import { random, authentication } from "../helpers";

export const login = async (
    req: express.Request,
    res: express.Response
): Promise<void> => {
    console.log("Incoming Request:", req.body);
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.sendStatus(400);
            return;
        }

        const user = await getUserByEmail(email).select(
            "+authentication.salt +authentication.password"
        );
        if (!user) {
            res.sendStatus(400);
            return;
        }

        const expectedHash = authentication(user.authentication.salt, password);

        if (expectedHash !== user.authentication.password) {
            res.sendStatus(403);
            return;
        }

        const salt = random();
        user.authentication.sessionToken = authentication(
            salt,
            user._id.toString()
        );

        await user.save();

        res.cookie("REST-API-Auth", user.authentication.sessionToken, {
            domain: "localhost",
            path: "/",
        });

        console.log("User logged successfully", user);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};

export const register = async (
    req: express.Request,
    res: express.Response
): Promise<void> => {
    console.log("Incoming Request:", req.body);

    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            console.log("Missing fields:", { email, password, username });
            res.status(400).json({ error: "Missing fields" });
            return;
        }

        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            console.log("User already exists");
            res.status(400).json({ error: "User already exists" });
            return;
        }

        const salt = random();
        const user = await createUser({
            username,
            email,
            authentication: {
                password: authentication(salt, password),
                salt,
            },
        });

        console.log("User registered successfully", user);
        res.status(200).json(user).end();
    } catch (error) {
        console.error("Error in register function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
