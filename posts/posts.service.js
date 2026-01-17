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
module.exports = { createPost, getAllPosts, getPostById }