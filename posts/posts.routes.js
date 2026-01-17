const express = require("express");
const postsController = require("./posts.controller");
const authenticationMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/", authenticationMiddleware, postsController.createPost)

router.get("/", postsController.getAllPosts);

router.get("/:id", postsController.getPostById);

router.put("/:id", authenticationMiddleware, postsController.editPost)

router.delete("/:id", authenticationMiddleware, postsController.deletePost)

module.exports = router;