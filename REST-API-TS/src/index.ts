import express = require("express");
import cors = require("cors");
import dotenv = require("dotenv");
import mongoose = require("mongoose");

import userRoutes from "./routes/userRoutes";
import connectDB from "./config/db";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//db connection
connectDB();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
