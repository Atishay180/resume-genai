import { User } from "../models/user.model.js";
import { Blacklist } from "../models/blacklist.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

/**
 * @name registerUserController
 * @description register a new user, exprects a username, email and password
 * @access Public
 */
const registerUser = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    try {
        if (!username || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "Please provide username, email and password" });
        }

        const isUserAlreadyExists = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (isUserAlreadyExists) {
            return res.status(400).json({ message: "User already exists with this username or email" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        //password check - 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum 8 characters, maximum 20 characters
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ message: "Password does not meet the requirements" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("token", token);

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/**
 * @name loginUserController
 * @description login a user, expects email and password
 * @access Public
 */
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("token", token);

        return res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/**
 * @name logoutUserController
 * @description logout a user
 * @access Public
 */
const logoutUser = async (req, res) => {
    const token = req.cookies.token;

    if (token) {
        await Blacklist.create({ token });
    }

    res.clearCookie("token");

    return res.status(200).json({
        message: "User logged out successfully"
    });
}

/**
 * @name getMeController
 * @description get current logged in user
 * @access Private
 */
const getMe = async (req, res) => {
    const user = await User.findById(req.user.id);

    return res.status(200).json({
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        },
        message: "User details fetched successfully"
    });
}

export { registerUser, loginUser, logoutUser, getMe };