const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project-bambook'
const secret = process.env.SECRET || '*(gCaZge%{TQ2m&;cn=-mRg._'

module.exports = { port, dbURI, secret }
