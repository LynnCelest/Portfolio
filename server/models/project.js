const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
}, {
    timestampes: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;