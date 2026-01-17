const express = require("express");
const req = require("express/lib/request");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "List of blog posts" });
})

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  res.status(200).json({ message: `Details of blog post with ID: ${postId}` });
});


module.exports = router;