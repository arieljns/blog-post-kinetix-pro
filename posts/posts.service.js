const posts = require('./posts.schema')

async function createPost(title, content, authorId) {
  if (!title || !content || !authorId) {
    throw new Error('INVALID_INPUT')
  }
  const post = await posts.create({
    title,
    content,
    authorId,
  })
  return post

}

async function getAllPosts() {
  const post = await posts.find().exec()

  if (post.length === 0) {
    throw new Error('NO_POSTS_FOUND')
  }
  return post
}

async function getPostById(postId) {
  const post = await posts.findById(postId)
  if (!post) {
    throw new Error('POST_NOT_FOUND')
  }
  return post
}

async function editPost(postId, title, content, userId) {
  const post = await posts.findById(postId)
  if (!post) {
    throw new Error('POST_NOT_FOUND')
  }
  if (post.authorId.toString() !== userId) {
    throw new Error('UNAUTHORIZED')
  }
  const updatedPost = await posts.findByIdAndUpdate(postId, { title, content }, { new: true })
  return updatedPost
}

async function deletePost(postId, userId) {
  const post = await posts.findById(postId)
  if (!post) {
    throw new Error('POST_NOT_FOUND')
  }
  if (post.authorId.toString() !== userId) {
    throw new Error('UNAUTHORIZED')
  }
  const deletedPost = await posts.findByIdAndDelete(postId)
  return deletedPost
}

module.exports = { createPost, getAllPosts, getPostById, editPost, deletePost }