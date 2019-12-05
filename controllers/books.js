const Book = require('../models/Book')

function indexRoute(req, res, next) {
  Book.find()
    .populate('createdBy')
    .then(books => res.json(books))
    .catch(next)
}

function showRoute(req, res, next) {
  Book.findById(req.params.id)
    .populate('createdBy', '-email')
    .populate('comments.user')
    .then(book => res.json(book))
    .catch(next)
}

function createRoute(req, res, next) {
  req.body.createdBy = req.currentUser
  Book.create(req.body)
    .then(book => res.status(201).json(book))
    .catch(next)
}

function updateRoute(req, res, next) {
  Book.findById(req.params.id)
    .then(book => book.set(req.body))
    .then(book => book.save())
    .then(book => res.json(book))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Book.findById(req.params.id)
    .then(book => book.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

function commentCreateRoute(req, res, next) {

  req.body.user = req.currentUser
  Book.findById(req.params.id)
    .then(book => {
      book.comments.push(req.body)
      return book.save()
    })
    .then(book => res.json(book))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  Book.findById(req.params.id)
    .then(book => {
      const comment = book.comments.id(req.params.commentId)
      comment.remove()
      return book.save()
    })
    .then(book => res.json(book))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
}
