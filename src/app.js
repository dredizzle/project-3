import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SecureRoute from './components/common/SecureRoute'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Team from './components/common/Team'

import booksShow from './components/books/Show'
import booksNew from './components/books/New'
import booksIndex from './components/books/Index'
import booksEdit from './components/books/Edit'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import UsersShow from './components/users/Show'
import UsersEdit from './components/users/Edit'

import 'bulma'
import './style.scss'

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <BrowserRouter>

        <Navbar />
        <Switch>
          <SecureRoute path="/users/:id/edit" component={UsersEdit} />
          <SecureRoute path="/users/:id" component={UsersShow} />
          <SecureRoute path="/books/:id/edit" component={booksEdit} />
          <SecureRoute path="/books/new" component={booksNew} />
          <Route path="/books/:id" component={booksShow} />
          <Route path="/books/genre" component={booksIndex} />
          <Route path="/books" component={booksIndex} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/team" component={Team} />
          <Route path="/" component={Home} />
        </Switch>

      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
