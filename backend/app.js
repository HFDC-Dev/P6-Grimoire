const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/books', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier livre',
            author: 'Jean Dupont',
            year: 2010,
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            rating: 4.2,
            genre: 'Policier',
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième livre',
            author: 'Marie Durant',
            year: 2015,
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            rating: 3.8,
            genre: 'Roman',
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
});

module.exports = app;