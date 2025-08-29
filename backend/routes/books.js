const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();


const bookCtrl = require('../controllers/books')

// Ajouter un livre
router.post('/', auth, bookCtrl.createBook);

// Récupérer tous les livres
router.get('/', bookCtrl.getAllBooks);

// Récupérer un seul livre par ID
router.get('/:id', auth, bookCtrl.getOneBook);



module.exports = router;