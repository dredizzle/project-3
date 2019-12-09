import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../books/Card'
import StoryCard from '../stories/StoryCard'
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
      genre: {},
      stories: []
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
      <section className="hero is-medium">
        <div className="hero-body parallax">
          <div className="container">
            <svg height="200" stroke="#fff" strokeWidth="2" className="text-line" width="100%"><text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">UNFOLD PAGES</text></svg>

          </div>
        </div>
        <div className="recently-added">
          <div className="notification is-white">
            <h2 className="subtitle is-6 home-recent has-text-white">RECENTLY ADDED</h2>
            <div className="columns is-multiline">
              {recentFour.map(book =>
                <div key={book._id} className="column is-4-tablet is-2-desktop is-6-mobile ">
                  <Link to={`/books/${book._id}`}>
                    <Card {...book} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* ******************* */}
        {/* Need to create Recenmt stroies and separate API to store users stories and axios frim there to display in home and think how to show them  */}
        {/* ******************* */}
        <div className="recent-stories">
          <div className="notification is-white">
            <h2 className="subtitle is-6 home-recent has-text-white">RECENT STORIES</h2>
            <div className="columns is-multiline">
              {recentFour.map(story =>
                <div key={story._id} className="column is-4-tablet is-2-desktop is-6-mobile ">
                  <Link to={`/stories/${story._id}`}>
                    <StoryCard {...story} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div id="genres" className="columns is-multiline is-centered genres">
          {genres.map(genre =>
            // *******************
            //Fix column responsivness 3 by 3 if tablet
            // *******************
            <div key={genre} className="column is-one-quarter-desktop  is-one-third-tablet has-text-centered folder">
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