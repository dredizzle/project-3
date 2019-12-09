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

const storySchema = new mongoose.Schema({
  author: {
    type: String,
    required: 'Please enter an author name'
  },
  title: {
    type: String,
    required: 'Please enter a title',
    unique: 'That title has already been used'
  },
  releaseDate: {
    type: Number,
    required: 'Year'
  },
  description: {
    type: String,
    required: false
  },
  story: {
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

storySchema.plugin(uniqueValidator)

module.exports = mongoose.model('story', storySchema)
