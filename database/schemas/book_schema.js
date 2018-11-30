const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = require("./comment_schema");

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    published: {
        type: Date,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "author"
    },
    comments: [CommentSchema]
});

module.exports = BookSchema;