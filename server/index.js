const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI

app.use(cors());
app.use(express.json());

mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.use('/blogs', require('./routes/blogs.js'));
app.use('/projects', require('./routes/projects.js'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});