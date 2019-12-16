const router = require('express').Router()
const secureRoute = require('../lib/secureRoute')
const booksController = require('../controllers/books')
const storiesController = require('../controllers/stories')

const usersController = require('../controllers/users')
const authController = require('../controllers/auth')


//Home 
router.get('/', (req, res) => res.json({ message: 'Welcome to Book Dream' }))

//Books
router.get('/books', booksController.index)
router.post('/books', secureRoute, booksController.create)
router.get('/books/:id', booksController.show)
router.put('/books/:id', secureRoute, booksController.update)
router.delete('/books/:id', secureRoute, booksController.delete)
router.post('/books/:id/comments', secureRoute, booksController.commentCreate)
router.delete('/books/:id/comments/:commentId', secureRoute, booksController.commentDelete)

//Stories
router.post('/stories', secureRoute, storiesController.create)
router.get('/stories', storiesController.index)
router.get('/stories/:id', storiesController.show)
router.post('/stories', secureRoute, storiesController.create)
router.get('/stories/:id', storiesController.show)
router.put('/stories/:id', secureRoute, storiesController.update)
router.delete('/stories/:id', secureRoute, storiesController.delete)
router.post('/stories/:id/comments', secureRoute, storiesController.commentCreate)
router.delete('/stories/:id/comments/:commentId', secureRoute, storiesController.commentDelete)

//Users
router.get('/users', usersController.index)
router.post('/users', secureRoute, usersController.create)
router.get('/users/:id', usersController.show)
router.put('/users/:id', secureRoute, usersController.update)
router.post('/users/:id/bookWish', secureRoute, usersController.create)
router.delete('/users/:id', secureRoute, usersController.delete)

//Auth
router.post('/register', authController.register)
router.post('/login', authController.login)

//Personal 
router.get('/me', secureRoute, authController.profile)


module.exports = router
