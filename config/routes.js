const router = require('express').Router()
const secureRoute = require('../lib/secureRoute')
const booksController = require('../controllers/books')
const usersController = require('../controllers/users')
const authController = require('../controllers/auth')

router.get('/', (req, res) => res.json({ message: 'Welcome to Project 3' }))

router.get('/books', booksController.index)
router.post('/books', secureRoute, booksController.create)
router.get('/books/:id', booksController.show)
router.put('/books/:id', secureRoute, booksController.update)
router.delete('/books/:id', secureRoute, booksController.delete)

router.post('/books/:id/comments', secureRoute, booksController.commentCreate)
router.delete('/books/:id/comments/:commentId', secureRoute, booksController.commentDelete)

router.get('/users', usersController.index)
router.post('/users', secureRoute, usersController.create)
router.get('/users/:id', usersController.show)
router.put('/users/:id', secureRoute, usersController.update)

router.post('/users/:id/bookWish', secureRoute, usersController.create)

router.delete('/users/:id', secureRoute, usersController.delete)

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/me', secureRoute, authController.profile)

module.exports = router
