import mongoose from "mongoose";

const User = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		profileTag: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
			default: "",
		},
		coverPicture: {
			type: String,
			default: "",
		},
		bio: {
			type: String,
		},
		birthday: {
			type: Date,
		},
		from: {
			type: String,
		},
		followers: {
			type: Array,
			default: [],
		},
		following: {
			type: Array,
			default: [],
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("User", User);
