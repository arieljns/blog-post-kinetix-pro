const express = require("express");

const router = express.Router()

const postRoutes = require("../posts/posts.routes");
const commentRoutes = require("../comments/comments.route");
const authRoutes = require("./authentication.route");
const userRoutes = require("../users/users.route");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" })
})

router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/auth", authRoutes);
router.use("/users",userRoutes)

module.exports = router