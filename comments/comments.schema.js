const { Schema, model, Types } = require('mongoose')

const CommentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },

    postId: {
      type: Types.ObjectId,
      ref: 'Post',
      required: true,
      index: true,
    },

    authorId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model('Comment', CommentSchema)
