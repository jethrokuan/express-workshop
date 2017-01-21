var express = require('express');
var Post = require('../models/post');

var router = express.Router();

// GET /posts
router.get('/', function(req, res) {
  Post.find({}, function(err, posts) {
    if (err) throw err;
    else res.render('posts/list.hbs', {posts: posts});
  });  
});

// POST /posts
router.post('/', function(req, res) {
  var post = new Post(req.body);
  post.save(function(err) {
    if (err) throw err;
    else res.redirect('/posts');
  }) 
});

// GET /posts/new
router.get('/new', function(req, res) {
  res.render('posts/new.hbs');
});

// GET /posts/u2111heut131
router.get('/:postid', function(req, res) {
  Post.findById(req.params.postid, function(err, post) {
    if (err) throw err;
    res.render('posts/show.hbs', {post: post});
  });
});

module.exports = router;
