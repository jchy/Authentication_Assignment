const express = require('express');
const router = express.Router();

const Post= require("../models/post.model");

const protect = require('../middlewares/protect');

router.post('/posts', async (req, res) => {
    try {
      const post = await Post.create(req.body);
      return res.status(201).json({ data: post });
    } catch (err) {
      return res.status(500).json({status: "failed", message: "Post is not created"});
    }
  });

router.get('/posts', protect, async (req, res) => {
    const posts = await Post.find({}).populate("user").lean().exec();
    return res.status(200).json({ data : posts });
})

module.exports = router;