const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const config = require('./db/db');
const Comment = require('./models/Comment');
const CommentRoute = require('./routes/CommentRoute');

const PORT = 3000;

app.use(bodyParser.json());

mongoose
    .connect(config.DB)
    .then(() => {
        console.log('doyourdood database is connected')
    }, err => {
        console.log('Can not connect to the database' + err)
    });

//middleware
app.use(bodyParser.json());
app.use('/comment', CommentRoute);

app.listen(PORT, function () {
    console.log('doyourdood nodejs server is running on PORT: ', PORT);
});