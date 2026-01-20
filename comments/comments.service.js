
const comments = require('./comments.schema')

async function createComment(postId, authorId, content) {
  if (!postId || !authorId || !content) {
    throw new Error('INVALID_INPUT');
  }
  const comment = await comments.create({
    postId,
    authorId,
    content,
  });
  return comment;
}



async function getComments() {
  const allComments = await comments.find({})

  if (!allComments) {
    throw new Error('NO_COMMENTS_FOUND')
  }
  return allComments
}

