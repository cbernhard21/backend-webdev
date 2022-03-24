const express = require('express');
const author = require('../models/author');
const router = express.Router();
const Author = require('../models/author');

//all authors route

router.get('/', (req, res) => {
  res.render('authors/index');
})

//new author route
router.get('/new', (req, res) => {
  res.render('authors/new', { author: new author() })
})

//create author route
router.post('/', (req, res) => {
  res.send(req.body.name);
})

module.exports = router;