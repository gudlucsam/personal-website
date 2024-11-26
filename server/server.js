const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Comment = require('./models/Comment');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/personal-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.get('/api/comments/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/comments', async (req, res) => {
  const comment = new Comment({
    postId: req.body.postId,
    author: req.body.author,
    content: req.body.content,
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/api/comments/:commentId/react', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    const { reactionType } = req.body;
    comment.reactions[reactionType] += 1;
    await comment.save();
    
    res.json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
