var express = require('express');
var router = express.Router();

// Mock Database first
var posts = [
  {
    'title': 'Post 1',
    'post': "Some text here 1"
  },
  {
    'title': 'Post 2',
    'post': "Some text here 2"
  }
];

// GET posts
router.get('/', function(req, res) {
  res.render('posts/list.hbs', {posts: posts});
});

module.exports = router;
