const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    descruption: { type: String, },
    price: { type: Number, default: 0 },
    author: { type: String },
}, {
    timestamps: true,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;