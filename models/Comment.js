const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name: {
        type: String,
    },
    body: {
        type: String,
        required: true
    }
})

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;