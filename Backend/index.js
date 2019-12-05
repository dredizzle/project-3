const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const users = require('./routes/users')

//Set up env
dotenv.config()


// mongo db connect 
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/api/users', users)



// Run app
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`We are running on port ${port} `))

