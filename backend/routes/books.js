const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('../middleware/multer-config');


const bookCtrl = require('../controllers/books')

// Ajouter un livre
router.post('/', auth, multer, bookCtrl.createBook);

// Récupérer tous les livres
router.get('/', bookCtrl.getAllBooks);

// Récupérer un seul livre par ID
router.get('/:id', bookCtrl.getOneBook);

//Modifier un livre
router.put('/', multer, bookCtrl.modifyBook);

//Supprimer un livre
router.delete('/', bookCtrl.deleteBook);



module.exports = router;