import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "username already taken"],
        required: true
    },
    email: {
        type: String,
        unique: [true, "username already exists"],
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const User = mongoose.model.User || mongoose.model("User", userSchema);