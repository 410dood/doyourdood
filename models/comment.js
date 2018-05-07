const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Comment
var Comment = new Schema({
    comment: {
        type: String
    },
    age: {
        type: Number
    }
}, {collection: 'comments'});

module.exports = mongoose.model('Comment', Comment);