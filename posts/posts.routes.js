const express = require("express");
const postsController = require("./posts.controller");
const authenticationMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/", authenticationMiddleware, postsController.createPost)

router.get("/", postsController.getAllPosts);

router.get("/:id", postsController.getPostById);


module.exports = router;