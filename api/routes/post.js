import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// create a post
router.post("/", async (req, res) => {
	const newPost = new Post(req.body);
	try {
		await newPost.save();
		res.status(200).json("Post created successfully");
	} catch (error) {
		res.status(500).json(error);
	}
});

// delete post
router.delete("/:postId", async (req, res) => {
	const { postId } = req.params;
	const userReqId = req.body.userId;

	try {
		const post = await Post.findById(postId);
		if (post.userId === userReqId) {
			await post.deleteOne();
			res.status(200).json("Post deleted successfully");
		} else {
			res.status(403).json("You can't delete a post that's not yours!");
		}
	} catch (error) {
		console.log(error);
	}
});

// get feed (user + following posts)

// get profile posts

export default router;
