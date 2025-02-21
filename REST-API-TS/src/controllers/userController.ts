import { Request, Response } from "express";
import User from "../models/User";

// Create User
export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, age } = req.body;
        const user = await User.create({ name, email, age });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: "Invalid user data" });
    }
};

// Get All Users
export const getUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Get Single User
export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Update User
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Delete User
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        res.json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};