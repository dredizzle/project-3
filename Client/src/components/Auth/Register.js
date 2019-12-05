import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'



const styles = {
  textField: {
    width: '100%',
    marginBottom: 5
  },
  btnBlock: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20
  }
}
//initial state
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      login: '',
      password: '',
      password2: '',
      errors: {}
    }
    //Handle Chnage  
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }
  //Pass Info To State 
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  //Submit
  handleSubmit(e) {
    e.preventDefault()
    const userData = {
      email: this.state.email,
      login: this.state.login,
      password: this.state.password,
      password2: this.state.password2
    }
    console.log(userData)
    //Gives us an objest
  }
  render() {
    const { classes } = this.props;
    const { errors } = this.state
    return (
      <Paper style={{ padding: 15 }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            error={errors.email ? true : false}
          />
          <TextField
            label="Login"
            type="text"
            name="login"
            value={this.state.login}
            onChange={this.handleChange}
            className={classes.textField}
            error={errors.login ? true : false}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            className={classes.textField}
            error={errors.password ? true : false}
          />
          <TextField
            label="Repeat password"
            type="password"
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
            className={classes.textField}
            error={errors.password2 ? true : false}
          />
          <div className={classes.btnBlock}>
            <Button variant="outlined" type="submit">
              Submit
						</Button>
          </div>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(Register)