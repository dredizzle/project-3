import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from './Card'
import qs from 'query-string'
import genres from '../../lib/genres'


class Index extends React.Component {
  constructor(props) {
    super(props)

    this.props.match.query = qs.parse(this.props.location.search)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      books: [],
      list: '',
      searchText: '',
      genre: this.props.match.query.genre || ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    axios('/api/books')
      .then(res => this.setState({ books: res.data }))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.getData()
    }
  }

  searchBook() {

    const search = new RegExp(this.state.searchText, 'i')
    const genre = new RegExp(this.state.genre, 'i')
    return this.state.books.filter(book => {
      return (search.test(book.author) || search.test(book.title)) && genre.test(book.genre)
    })
  }

  render() {

    if (!this.state.books) return null
    return (
      <section className="section">
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
            <div className="control column index-control">
              <div className="select">
                <select
                  name="genre"
                  onChange={this.handleChange}
                  value={this.state.genre || 'All'}
                >
                  <option value=''>All</option>
                  {genres.map(genre =>
                    <option key={genre} value={genre}>{genre.charAt(0).toUpperCase() + genre.substr(1)}</option>
                  )}
                </select>
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            {this.searchBook().map(book =>
              <div key={book._id} className="column is-one-fifth-desktop is-one-third-tablet">
                <Link to={`/books/${book._id}`}>
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
