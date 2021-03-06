const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Category = new Schema(
    {
        name: { type: String, required: true },
        category: { type: Array, required: false },
        cover: { type: String, required: false },
        isVisible: { type: Boolean, required: false },
        isCentered: { type: Boolean, required: false },
        url: { type: String, required: false },
        order: { type: Number, required: false }
    },
    { timestamps: false },
)

module.exports = mongoose.model('categories', Category);