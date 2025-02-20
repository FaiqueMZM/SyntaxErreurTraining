import express from "express";
import { getUserByEmail, createUser } from "../db/users";
import { random, authentication } from "../helpers";

export const register = async (
    req: express.Request,
    res: express.Response
): Promise<void> => {
    console.log("Incoming Request:", req.body); // Debugging

    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            console.log("Missing fields:", { email, password, username }); // Debugging
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
