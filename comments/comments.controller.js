
const commentService = require('./comments.service');

exports.createComment = async (req, res) => {
  const { postId, content } = req.body;
  const authorId = req.user.id;
  try {
    const comment = await commentService.createComment(postId, authorId, content);
    res.status(201).json({
      message: 'comment posted successfully',
      comment: {
        id: comment._id,
        postId: comment.postId,
        authorId: comment.authorId, 
      }
    })
  } catch (error) {
    if (error.message === 'INVALID_INPUT') {
      return res.status(400).json({ message: 'Invalid input data' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.getComment