const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reactions: {
    likes: { type: Number, default: 0 },
    hearts: { type: Number, default: 0 },
    celebrates: { type: Number, default: 0 },
  }
});

module.exports = mongoose.model('Comment', CommentSchema);
