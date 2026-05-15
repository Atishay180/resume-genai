import jwt from "jsonwebtoken";
import { Blacklist } from "../models/blacklist.model.js";

/**
 * @name authUser
 * @description Middleware to check if user is authenticated & token is not blacklisted
 * @access Private
 */
export const authUser = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const isTokenBlacklisted = await Blacklist.findOne({ token });

    if (isTokenBlacklisted) {
        return res.status(401).json({ message: "Invalid token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}