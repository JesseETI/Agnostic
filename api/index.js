import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

// routers
import AuthRouter from "./routes/auth.js";
import PostRouter from "./routes/post.js";
import UserRouter from "./routes/user.js";

const app = express();
const port = 9000;

dotenv.config();
app.use(express.json());
app.use(morgan("tiny"));
app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		methods: "GET, POST, PUT, DELETE",
		credentials: true,
	})
);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Express is running on port ${port}`);
});

// connect to MongoDB Collection
mongoose.connect(process.env.MONGO_URL, () => {
	console.log("Connected to MongoDB");
	console.log(mongoose.connection.readyState);
});

// base api url: /api
app.use("/api/auth", AuthRouter);
app.use("/api/users", UserRouter);
app.use("/api/posts", PostRouter);
