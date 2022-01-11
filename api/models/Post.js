import mongoose from "mongoose";

const Post = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		body: {
			text: String,
			image: String,
		},
		likes: {
			type: Array,
			default: [],
		},
		dislikes: {
			type: Array,
			default: [],
		},
		comments: [
			{
				userId: String,
				text: String,
				createdAt: Date,
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Post", Post);
