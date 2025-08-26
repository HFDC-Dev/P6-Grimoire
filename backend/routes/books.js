const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/books')

// Ajouter un livre
router.post('/', bookCtrl.createBook);

// Récupérer tous les livres
router.get('/', bookCtrl.getAllBooks);

// Récupérer un seul livre par ID
router.get('/:id', bookCtrl.getOneBook);


module.exports = router;