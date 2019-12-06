import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../books/Card'
import axios from 'axios'
import genres from '../../lib/genres'
function orderByDate(arr) {
  return arr.slice().sort(function (a, b) {
    const aDate = new Date(a.createdAt)
    const bDate = new Date(b.createdAt)
    return bDate - aDate
  })
}
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
      genre: {}
    }
  }
  componentDidMount() {
    axios('/api/books')
      .then(res => this.setState({ books: res.data }))
  }
  render() {
    if (!this.state.books.length === 0) return null
    let recentFour = orderByDate(this.state.books, this.state.books.createdAt)
    console.log(this.state.books, 'BOOK HOME')
    recentFour = recentFour.slice(0, 6)
    return (
      <section className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title display title-home">BAMBOOK</h1>
            <h2 className="subtitle"></h2>
          </div>
        </div>
        <div className="recently-added">
          <div className="notification is-white">
            <h2 className="subtitle is-6 home-recent">RECENTLY ADDED</h2>
            <div className="columns is-multiline">
              {recentFour.map(book =>
                <div key={book._id} className="column is-2 is-one-third-tablet">
                  <Link to={`/books/${book._id}`}>
                    <Card {...book} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="columns is-multiline is-centered genres">
          {genres.map(genre =>
            <div key={genre} className="column is-one-quarter-desktop  blues is-one-third-tablet has-text-centered folder">
              <Link to={`/books?genre=${genre}`}>
                <img src={`/images/${genre}.png`} alt={genre} />
                <img src={`/images/${genre}-clr.png`} alt={genre} />
              </Link>
            </div>
          )}
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>BamBook</strong> by <Link to={'/team'}>4 0f a K1nd</Link>
            </p>
          </div>
        </footer>
      </section>
    )
  }
}
export default Home