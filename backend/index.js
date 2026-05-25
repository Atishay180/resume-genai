import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";

import authRouter from "./routes/auth.route.js";

dotenv.config();

//app setup
const app = express();
const port = process.env.PORT;

//cors
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/auth", authRouter);

//server
app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
    connectDB();
})

