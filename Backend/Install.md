
0. To run 

open backed 
        npm run start

Open front end -> Client
        nodemon index.js



run mongodb 
---------------------
1.  nmp init -y
2. npm i -g npm 
3. npm i --save express  
4. npm i --save-dev nodemon 


5. go to package. json 

6. add to scripts
    "start": "nodemon ./index.js" 


7. -> npm run start and check console ) 

8. npm i --save dotenv

9. add new file 
        .env -> environment 

10. go to index.js and add 

```
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//Set up env
dotenv.config()


// mongo db connect 
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
const app = express()


// Run app
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`We are running on port ${port} `))


```
11. go to .env and add 

```
PORT = (NUM) 
MONGODB_URL = mongodb://localhost/(STRING)
SECRET = WORD/PHRASE
```


12. Terminal: 
npm i --save mongoose body-parser cors


13. Crete a new folder called models and new file User.js 
create mongoose schema 

```
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  login: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  followers: [],
  following: []
})

module.exports = mongoose.model('User', userSchema)

```

14. Create a new folder routes and file in there users.js 


```
const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    res.send('Hello')
  })

module.export = router
```
15. then go to index.js 

and add body paresr and users 



```
const bodyParser = require('body-parser')
const users = require('./routes/users')

```

and

```

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


```
so it looks like 

```
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



```


16. let's check that everytugin works go run everyting 
fromt: yarn start 
back : npm run serve 


17. go to http://localhost:5000/api/users
to receive hello message 


18. Create a folder validation 

19. add a file in the validation folder called register.js 

20. Terminal comand to run: npm --save valodator 
```
    "validator": "^12.1.0"
```

21. Write valivation scenarios 

```
const Validator = require('validator')

module.exports = function (data) {
  let errors = {}

  // Validation scenarious 
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isEmpty(data.login)) {
    errors.login = 'Login field is required'
  }

  if (!Validator.isLength(data.login, { min: 4, max: 30 })) {
    errors.login = 'Login must between 4 and 30 characters'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must between 6 and 30 characters'
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password is required'
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
```

22. go to users.js and add 
```
const validateRegisterInput = require('../validation/register')

```

and more so the code looks like this: 

```
const router = require('express').Router()
const User = require('../models/User')
const validateRegisterInput = require('../validation/register')

router.route('/register')
  .post((req, res) => {
    const { isValid, errors } = validateRegisterInput(req.body)

    if (!isValid) {
      return res.status(404).json(errors)
    }
    return res.send('OK!')
  })

module.exports = router


```

23. 

then go to insomnia to post 
http://localhost:5000/api/users/register
and open main info receivwed: 


```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>TypeError: Expected string but received a undefined.<br> &nbsp; &nbsp;at assertString (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/validator/lib/util/assertString.js:28:11)<br> &nbsp; &nbsp;at Object.isEmpty (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/validator/lib/isEmpty.js:19:29)<br> &nbsp; &nbsp;at module.exports (/Users/ustinvaskin/Desktop/Pj-3/Backend/validation/register.js:7:17)<br> &nbsp; &nbsp;at /Users/ustinvaskin/Desktop/Pj-3/Backend/routes/users.js:7:33<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/route.js:137:13)<br> &nbsp; &nbsp;at Route.dispatch (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at /Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/index.js:281:22<br> &nbsp; &nbsp;at Function.process_params (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at Function.handle (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/index.js:174:3)<br> &nbsp; &nbsp;at router (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/index.js:47:12)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/index.js:317:13)<br> &nbsp; &nbsp;at /Users/ustinvaskin/Desktop/Pj-3/Backend/node_modules/express/lib/router/index.js:284:7</pre>
</body>
</html>

``

24. Let's test it ann send a post request with Insomnia with register info and see what we will receive 

{
	"email": "ustin@ustin",
	"login": "ustin",
	"password": "ustin",
	"password2": "ustin"

}

we receive: 

{
  "email": "Email is invalid",
  "password": "Password must between 8 and 32 characters"
}

25. go to users.js 

add more code find one and newUser 
looks liek this: 

```
const router = require('express').Router()
const User = require('../models/User')
const validateRegisterInput = require('../validation/register')

router.route('/register')
  .post((req, res) => {
    const { isValid, errors } = validateRegisterInput(req.body)

    if (!isValid) {
      return res.status(404).json(errors)
    }
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          errors.email = 'Email was used!'
        }
        const newUser = new User({
          email: res.body.email,
          login: req.body.login
        })
      })

  })

module.exports = router

```

26. Encrypt
Terminal in backed npm i --save bcryptjs


back to users.js 

looks like this: 

```
const router = require('express').Router()
const User = require('../models/User')
const validateRegisterInput = require('../validation/register')
const bcrypt = require('bcryptjs')



router.route('/register')
  .post((req, res) => {
    const { isValid, errors } = validateRegisterInput(req.body)

    if (!isValid) {
      return res.status(404).json(errors)
    }

    //check if email was already used? 
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          errors.email = 'Email was used!'
        }
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(req.body.password, salt, function (err, hash) {
            const newUser = new User({
              email: req.body.email,
              login: req.body.login,
              password: hash
            })

            newUser.save()
              .then(newUser => res.json(newUser))
              .catch(err => console.log(err))



          })
        })
      })

  })

module.exports = router

```

Backend terminal npm run start -> 
go to insomnia 

Post request on http://localhost:5000/api/users/register
```
with : 

{
	"email": "lol@gmail.com",
	"login": "Loginis this",
	"password": "12345678",
	"password2": "12345678"
}


receive: 
{
  "followers": [],
  "following": [],
  "_id": "5de85453ed7c6aa3ec960f7b",
  "email": "lol@gmail.com",
  "login": "Loginis this",
  "password": "$2a$10$8pPfRrKH60JMlXsquGeRd.9RSgrhxlrV2/UgOaUJa0tsOstRQKvQS",
  "__v": 0
}
```
if we try again with the same e-mail it will tell us 
that e-mail was already in use 


27. go to front end terminal to type 

yarn add redux redux-thunk react-redux

to add dependancy 


