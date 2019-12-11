import React from 'react'
import axios from 'axios'

import Form from './StoryForm'
import Auth from '../../lib/Auth'

class StoryNew extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {},
      errors: {},
      stories: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()


    //Decide on API stories or new API we need to update API stories to add
    //releasedate
    //in stead of Relese Year


    axios.post('/api/stories', this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/stories'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-quarters-desktop is-two-thirds-tablet">
              <Form
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state.data}
                errors={this.state.errors}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default StoryNew