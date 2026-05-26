import { Router } from "express";
import { getMe, loginUser, logoutUser, registerUser } from "../controllers/auth.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const authRouter = Router();

/**
 * @route POST /api/v1/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", registerUser);

/**
 * @route POST /api/v1/auth/login
 * @description Login a user
 * @access Public
 */
authRouter.post("/login", loginUser);

/**
 * @route POST /api/v1/auth/logout
 * @description Logout a user & add token to blacklist
 * @access Public
 */
authRouter.post("/logout", logoutUser);

/**
 * @route GET /api/v1/auth/get-me
 * @description Get current logged in user
 * @access Private
 */
authRouter.get("/get-me", authUser, getMe);

export default authRouter;