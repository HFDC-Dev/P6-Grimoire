const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number },
    genre: { type: String },
    imageUrl: { type: String },
    ratings: [
        {
            userId: { type: String, required: true },
            grade: { type: Number, min: 0, max: 5, required: true }
        }
    ],
    averageRating: { type: Number, default: 0 },
    userId: { type: String, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
