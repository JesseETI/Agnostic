import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

// register
router.post("/register", async (req, res) => {
	try {
		const { name } = req.body;
		const { password } = req.body;
		const salt = bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			name,
			password: hashedPassword,
		});

		await newUser.save();
		res.status(200).json("Your account has been created");
	} catch (err) {
		res.status(500).json(err);
	}
});

// Logins use PassportJS strategies

// local login

// Google login

// Facebook login

export default router;
