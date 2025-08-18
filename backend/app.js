const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://user_mdb:Poiuytreza@cluster0.jhhklgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/books', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Livre crée !'
    })
});

app.get('/api/books', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier livre',
            author: 'Jean Dupont',
            year: 2010,
            imageUrl: '',
            rating: 4.2,
            genre: 'Policier',
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième livre',
            author: 'Marie Durant',
            year: 2015,
            imageUrl: '',
            rating: 3.8,
            genre: 'Roman',
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
});

module.exports = app;