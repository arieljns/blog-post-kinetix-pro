
const postService = require('./posts.service');


exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const authorId = req.user.id;
  try {
    const post = await postService.createPost(title, content, authorId);
    res.status(201).json({
      message: 'Post created successfully',
      post: {
        id: post._id,
        title: post.title,
        content: post.content,
        authorId: post.authorId,
        createdAt: post.createdAt,
      }
    });
  } catch (error) {
    if (error.message === 'INVALID_INPUT') {
      return res.status(400).json({ message: 'Invalid input data' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    console.log(posts);
    res.status(200).json({ posts });
  } catch (error) {
    if (error.message === 'NO_POSTS_FOUND') {
      return res.status(404).json({ message: 'No posts found' });
    }
    console.log(error)
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await postService.getPostById(postId)
    res.status(200).json({ post })
  } catch (error) {
    if (error.message === 'POST_NOT_FOUND') {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
}