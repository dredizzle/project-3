import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from './StoryCard'
import qs from 'query-string'



class Index extends React.Component {
  constructor(props) {
    super(props)

    this.props.match.query = qs.parse(this.props.location.search)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      stories: [],
      list: '',
      searchText: ''

    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    axios('/api/stories')
      .then(res => this.setState({ stories: res.data }))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.getData()
    }
  }

  searchBook() {

    const search = new RegExp(this.state.searchText, 'i')
    const genre = new RegExp(this.state.genre, 'i')
    return this.state.stories.filter(book => {
      return (search.test(book.author) || search.test(book.title)) && genre.test(book.genre)
    })
  }

  render() {

    if (!this.state.stories) return null
    return (
      <section className="section-story">
        <div className="container">
          <div className="container columns ">
            <div className="control column index-control">
              <input
                className="input"
                type="text"
                placeholder="Search term"
                name="searchText"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="columns is-multiline">
            {this.searchBook().map(book =>
              <div key={book._id} className="column is-one-fifth-desktop is-one-third-tablet">
                <Link to={`/stories/${book._id}`}>
                  <Card {...book} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}
export default Index
