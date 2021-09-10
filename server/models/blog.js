const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
}, {
    timestampes: true
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;