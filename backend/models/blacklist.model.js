import mongoose, { mongo } from "mongoose";

const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required"]
    }
}, { timestamps: true });

export const Blacklist = mongoose.models.Blacklist || mongoose.model("Blacklist", blacklistSchema);  