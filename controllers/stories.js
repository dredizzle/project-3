const Story = require('../models/Story')

function indexRoute(req, res, next) {
  Story.find()
    .populate('createdBy')
    .then(stories => res.json(stories))
    .catch(next)
}

function showRoute(req, res, next) {
  Story.findById(req.params.id)
    .populate('createdBy', '-email')
    .populate('comments.user')
    .then(story => res.json(story))
    .catch(next)
}

function createRoute(req, res, next) {
  req.body.createdBy = req.currentUser
  Story.create(req.body)
    .then(story => res.status(201).json(story))
    .catch(next)
}

function updateRoute(req, res, next) {
  Story.findById(req.params.id)
    .then(story => story.set(req.body))
    .then(story => story.save())
    .then(story => res.json(story))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Story.findById(req.params.id)
    .then(story => story.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

function commentCreateRoute(req, res, next) {

  req.body.user = req.currentUser
  Story.findById(req.params.id)
    .then(story => {
      story.comments.push(req.body)
      return story.save()
    })
    .then(story => res.json(story))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  Story.findById(req.params.id)
    .then(story => {
      const comment = story.comments.id(req.params.commentId)
      comment.remove()
      return story.save()
    })
    .then(story => res.json(story))
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
