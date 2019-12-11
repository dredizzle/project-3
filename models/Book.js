const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 280
  }
}, {
  timestamps: true,
  toJSON: {
    transform(doc, json) {
      delete json.__v
      return json
    }
  }
})

const bookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: 'Please enter an author name'
  },
  title: {
    type: String,
    required: 'Please enter a title',
    unique: 'That title has already been used'
  },
  image: {
    type: String,
    required: 'Please add an image'
  },
  releaseYear: {
    type: Number,
    required: 'Year'
  },
  genre: {
    type: String,
    required: true,
    enum: ['Fantasy', 'Adventure', 'Romance', 'Mystery', 'Horror', 'ScienceFiction', 'Cooking', 'Art', 'History', 'Travel', 'Biography', 'Nonfiction']
  },
  pg: {
    type: String
  },
  ISBN: {
    type: String,
    required: 'Add ISBN'
  },
  description: {
    type: String,
    required: false
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  comments: [commentSchema]
}, {
  timestamps: true,
  toJSON: {
    transform(doc, json) {
      delete json.__v
      return json
    }
  }
})

bookSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Book', bookSchema)
