const mongoose = require("mongoose");
const config = require('../db/db');
// mongoose.connect("mongodb://localhost/doyourdood");
mongoose.Promise = global.Promise;

mongoose.connect((config.DB), {useMongoClient: true}).then(() => {
    console.log('doyourdood database is connected')
}, err => {
    console.log('Can not connect to the database' + err)
});

module.exports.TextPost = require("./textPost");
module.exports.Comment = require("./comment");
