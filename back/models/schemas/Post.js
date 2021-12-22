const { Schema } = require("mongoose");

const postSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        metaUrl: {
            type: String,
            require: true,
        },
        thumbnailUrl: {
            type: String,
            require: true,
        },
        likes: {
            type: Array,
            default: [],
            // require: true,
        },
        comments: {
            type: Array,
        },
        tags: {
            type: Array,
            // require: true,
        },
    },
    { timestamps: true }
);

module.exports = postSchema;