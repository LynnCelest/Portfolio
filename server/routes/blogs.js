const router = require('express').Router();
let Blog = require('../models/blog.js');

router.route('/').get((req, res) => {
    Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;

    const blog = new Blog({name});

    blog.save()
    .then(() => res.json('Blog added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;