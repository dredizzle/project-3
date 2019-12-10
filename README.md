!['Sign-Up-Flow'](https://i.imgur.com/cCvPghk.png )
!['Sign-Up-Flow'](https://i.imgur.com/JKZJWdY.gif )
!!! ADD info about HASH ROUTER ANDRE 
INFO ABOut seeds

Info about design 

```
Pj-3
└──index.html
// NEED to do folder structure 
```
---

# Start: 
# Installation
    Clone or download the repo
    Run 'yarn init' in the CLI
    Run 'mongod', 'yarn seed', 'yarn run:server' and 'yarn run:client' in the CLI
---
## Timeframe
7 days

---

# Developing a new feature!
* `gco -b name-of-branch`
* Create your feature!
* `git add .`
* `git commit -m "my great new feature"` (You can add and commit as often as you like at this stage. Recommend at least daily)
* `gco development`
* `git pull origin development`
* `gco name-of-branch`
* `git merge development`
* If there were any conflicts, resolve them, involving your team as needed. Make sure to run your tests after doing this!
* `git add .` (Not necessary if there were no conflicts)
* `git commit -m "message"` (Not necessary if there were no conflicts)
* `gco development`
* `git merge name-of-branch`
* `git push origin development`
---
### Overview 
##### For Readers Writesr BookLovers
---
###### BamBook is a society for authors and booklovers that allows users to discuss books, post their own stories, browse those of others and communicate with each-other.
---
### Technologies used:
#### Front end:
JavaScript, HTML, SCSS, Bulma, React.js, Webpack, Axios, Babel, Promise, Adobe Illustrator 
#### Back end: 
Node.js, Express, MongoDB, Mongoose, Bluebird

---
### Back End:

Unlike our earlier projects, here we were challenged to build our own database. We began by planning out our book model, story model and our user model. These set the foundation upon which we would later embed modifications such as comments and a user wishlist.

After installing key dependencies (see technologies), we created an app.js page and set up a 'Hello world' message running on localhost:4000. Next we stored this port variable in an environment.js file in our config folder. Then, while half of the group worked on the user, story and book models, the other half started creating the user, book, and auth controllers. After this, we exported routes from our controllers files into a routes file in our config folder.

Once we had completed the models we created a seeds file, to make it easier to update the database. We then looked at authorisation, creating a SecureRoute file, to make sure that only logged in users would be able to add books and stories to the site and then delete or update only their own collections.


## ERD
#### Sign-Up-Flow: 
!['Sign-Up-Flow'](https://i.imgur.com/NcSmXEF.png)

## API Endpoint Documentation

| **GET** |  |
| --- | --- |
| _/users/verify_ | Primarily used to check if a user is already logged in when the page loads. Takes user’s token from local storage (if there is one) and uses it to verify who they are. Returns user’s data (name, email, id). |
| _/questions/topic/:topic_ | For fetching all questions pertaining to a specific topic. ‘Topic’ is the only parameter in the request. Returns an array of questions, each with: id, topic, title, question, user id. |
| _/questions/id/:id_ | For fetching one question and all of its associated answers. The request will include the question id. Returns a single question (id, topic, title, question, user id) with an array of answers (id, answer, question id, user id). |

| **POST** |  |
| --- | --- |
| _/users_ | For adding a new user. Takes users name, email and password, encrypts the password and stores the info in the database. Returns user’s data (name, email, id) minus password, and an auth token. |
| _/users/login_ | For logging in users. Will take their name and password, verify them and create a token to be stored in local storage. Returns user’s data (name, email, id) minus password, and an auth token. |
| _/questions_ | For posting a new question to the database. Requests will include the user’s token, topic, title, question and user id. Returns question data (id, topic, title, question and user id). |
| _/question/id/:id/answers_ | For posting a new answer to a specific question in the database. Takes the user’s token, question id, user id, and answer. Returns answer data (id, answer, question id, user id). |

| **PUT** |  |
| --- | --- |
| _/questions/:id_ | For updating a question. The request will include the user’s token, question id, topic, title, and question. Returns question data (question id, topic, title, question). |
| _/answers/:id_ | For updating a question. The request will include the user’s token, answer id, and answer. Returns answer data (answer id, answer, user id, question id). |

| **DELETE** |  |
| --- | --- |
| _/questions/:id_ | For deleting a question. The request will include the user’s token and question id. Returns message “Question deleted.” |
| _/answers/:id_ | For deleting an answer. The request will include the user’s token and answer id. Returns message “Answer deleted.” |

---
### Wireframes:
!['Sign-Up-Flow'](https://i.imgur.com/uUsZxn1.png)


---
### Home Page:

The homepage is divided into four sections: the main hero, recently added, recent stories and genres.

The 'recently added' section presented some challenges, as this was the first time that we had worked with timestamps when building models. Another problem arose when we tried to sort an array according to this property. While we had the right approach in principle, we had not realised that we needed to use JavaScript's `date` functionality, if we wanted to compare one property with another.

    function orderByDate(arr) {
      return arr.slice().sort(function (a, b) {
        const aDate = new Date(a.createdAt)
        const bDate = new Date(b.createdAt)
        return bDate - aDate
      })
    }

Finally icons at the bottom of the page allow the user to access the index page, where books are filtered according to the genre property.

--- 

### Book Collection:

###### Book Show page

- Our approach to the book show page was to first get the key information about the books displayed on the page. For this we used an axios request to pull in information on the book (image, label, genre, year etc, stored in our seeds file), and then set this to state to render on the page;
- Next we wanted to have a section displaying similar genre on the page;
- After that we added goodrewies embedade API to gather more information about specific book;
- And, finally we added a button to Amzazon book page so user can purchase the book.

---
### Comments

On the book `Show.js page` we added a Bulma media object. We then attached an event listener to push the content to the book comment property via our commentCreate route before displaying it on the page. We also attached a `commentDelete` event listener to the cross icon. Inside this handler we wrote an `'if statement'` to ensure that users could only delete their own comments and not those of other users. Finally we added a reload method, so that the new comments would display on the page after the user clicked.

---

### User Register / login

Up in the right hand corner of the screen there is a register button, which redirects to the register page. Once the user has entered in a username, email, password and password confirmation, the user will be redirected to the login page, where the will be prompted to log in.

---

### User Profile page / Edit

After log in has been completed with the correct credentials, the user gets redirected to the book collection so they can have a further browse of the books already in the database.

###### Now in place of where the register button was, is now the Profile page button. When the user follows this link, they will be redirected to their profile page which contains:

* A user card, holding the user information such as the username, profile picture and a short bio about themselves;
* A book and story collection, which would contain all the books and stories the user has or potentially will add to the database;
* Favourite stories;
* A Wish list.


---

### Wish list/ Favourute Stories

Within the user profile page, is the users Wishlist of books they are on the hunt for. On each of the book pages, there is a button that gives you the option to add the current book to your wish list. This is for other users to see what you are interested in and if they have it, they can leave a comment on the book in order to let the user know.

---


### Messaging:

In a future version of the site we would like to implement a more secure messaging system, as to allow the user more comfortability in sharing their personal information over the web.
# `ADD MORE INFO`

---


### Process:

# `ADD A TRELLO BOARD` Create a good one and add it 

Once we'd decided on the theme for our project, we created a group Trello board to breakdown and manage our workload and created wireframes for the website.

---

### Final Product: 

# `ADD IMAGES` 


---

### Modifiations:

### PayPal

The comments section already points in this direction, but a fully realised version of the app ought to include some form of payment, so that users might follow up after the initial contact has been made via comment or messenger.

### Refactoring

For instance, the code would be more readable and modular, if we were to make a separate comments folder, rather than keeping these on the show page.

### Accessibility

There are still a few corners of the site where we could add more error messages and redirect the user to the login page. For example, when a user is not logged in they cannot add comments, though no message informs them of this.

!['Sign-Up-Flow'](https://i.imgur.com/JKZJWdY.gif)




