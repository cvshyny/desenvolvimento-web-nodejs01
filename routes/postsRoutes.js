const express = require('express')
const router = express.Router()

const PostController = require('../controllers/postController')

router.get('/index', PostController.lista)
router.get('/new', PostController.novo)
router.post('/add', PostController.salvar)
router.get('/edit/:id', PostController.edit)
router.get('/delete/:id', PostController.excluir)
router.get('/view/:id', PostController.visualizar)
router.post('/update', PostController.alterar)

module.exports = router