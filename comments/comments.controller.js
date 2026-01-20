
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

exports.getComments = async (req, res) => {
  try {
    const comments = await commentService.getComments();
    res.status(200).json({ comments })
  } catch (error) {
    if (error.message === 'NO_COMMENTS_FOUND') {
      return res.status(404).json({ message: 'No comments found' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.getComment