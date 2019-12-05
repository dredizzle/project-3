// create rect app (Name)
// npm i -(NAME)
// installing depe 
// npm i
//   "@material-ui/core": "^3.9.2",
//   "@material-ui/icons": "^4.5.1",
//   "axios": "^0.18.0",
//   "jwt-decode": "^2.2.0",
//   "react": "^16.8.3",
//   "react-dom": "^16.8.3",
//   "react-made-with-love": "^1.0.1",
//   "react-redux": "^6.0.1",
//   "react-router-dom": "^4.3.1",
//   "react-scripts": "2.1.5",
//   "redux": "^4.0.1",
//   "redux-thunk": "^2.3.0"



import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Main from './components/Layout/Main'

import Home from './components/Home'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'


class App extends Component {
  render() {
    return (


      // using Routes
      <div>
        <BrowserRouter>
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </Main>
        </BrowserRouter>
      </div>
    )
  }
}



export default App
