
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