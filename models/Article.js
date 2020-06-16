const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    link: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;