const mongoose = require('mongoose')
const { dbURI } = require('./config/environment')
const User = require('./models/User')
const Book = require('./models/Book')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return User.create([{
        username: 'seangray1',
        email: 'sean.myles.gray@gmail.com',
        password: 'pass',
        passwordConfirmation: 'pass'
      },{
        username: 'gabelton',
        email: 'gabelton@gables.com',
        password: 'pass',
        passwordConfirmation: 'pass',
        image: 'https://i.imgur.com/aFoCicH.jpg'
      },{
        username: 'eprice',
        email: 'ekprice01@gmail.com',
        password: 'pass',
        passwordConfirmation: 'pass',
        image: 'https://s1.r29static.com//bin/entry/9d4/x,80/2164076/taylor-swift-cant-stop-teasing-2164076.jpg'
      }])
    })
    .then(users => {
      const [ sean, gabe, emma ] = users
      return Book.create([{
        author: 'Oyinkan Braithwaite',
        title: 'My Sister, the Serial Killer',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523366732l/38819868._SY475_.jpg',
        releaseYear: 2018,
        genre: 'Mystery',
        pg: 226,
        ISBN: '0385544235',
        description:"My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",
        createdBy: emma
      },{
        author: 'Harlan Coben',
        title: 'Run Away',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533567545l/40697540.jpg',
        releaseYear: 2019,
        genre: 'Mystery',
        pg: 371,
        ISBN: '1538748460',
        description:"My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",

        createdBy: emma
      },{
        author: 'Jane Harper',
        title: 'The Lost Man',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549469559l/39863488._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Mystery',
        pg: 340,
        ISBN: '1250105684',
        description:"My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",

        createdBy: emma
      },{
        author: 'Greer Hendricks, Sarah Pekkanen',
        title: 'An Anonymous Girl',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546956642l/39863515._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Mystery',
        pg: 375,
        ISBN: '1250133734',
        description:"My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",

        createdBy: emma
        
      },{
        author: 'Sally Hepworth',
        title: 'The Mother-in-Law',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546956642l/39863515._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Mystery',
        pg: 340,
        ISBN: '1250120926',
        description:"My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",
        createdBy: emma
      },{
        author: 'Tamsyn Muir',
        title: 'Gideon the Ninth',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546870952l/42036538.jpg',
        releaseYear: 2019,
        genre: 'Science Fiction',
        pg: 448,
        ISBN: '1250313198',
        description:"My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",

        createdBy: emma
      },{
        author: 'Ted Chiang',
        title: 'Exhalation',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1561894093l/46347136._SX318_.jpg',
        releaseYear: 2019,
        genre: 'Science Fiction',
        pg: 350,
        ISBN: '1101947888',
        description:"My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",

        createdBy: emma
        
      }
      ])
    })

    .then(() => mongoose.connection.close()) // disconnect from the database
    .catch(err => {
      console.log(err) // log any errors
      mongoose.connection.close() // disconnect from the database
    })
})
