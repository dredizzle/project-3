import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'
class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {
        books: [],
        bookWish: []
      }
    }

  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .then(() => {
        if (this.props.location.state) {
          return this.handleWish()
        }
      })
      .catch(err => console.error(err))
  }

  handleWish() {
    const token = Auth.getToken()
    const currentUser = this.state.user._id
    const bookWish = this.state.user.bookWish.slice()
    bookWish.push(this.props.location.state.book)
    const user = { ...this.state.user, bookWish }
    axios.put(`/api/users/${currentUser}`, { bookWish: bookWish }, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(() => this.setState({ user }))
      .catch(err => console.error(err))
  }


  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user._id
  }


  render() {

    if (!this.state.user) return null
    const { _id } = this.state.user
    return (
      <section className="section">
        <div className="container editpage">

          <div className="columns is-variable is-2">

            <div className="column is-third">
              <div className="user-info box">
                <div className="user-image">
                  <figure className="image">
                    <img src={this.state.user.image} alt={this.state.user.username} />
                  </figure>
                </div>
                <div className="username">
                  <h3 className="subheading-show">{this.state.user.username}</h3>
                </div>
                <div className="user-bio">
                  <p className="profile">{this.state.user.bio}</p>
                </div>
              </div>
              {this.canModify() &&
                <div className="level-left">
                  <Link to={`/users/${_id}/edit`} className="button is-dark">Edit</Link>
                </div>

              }
            </div>

            <div className="column is-third">
              <div className="bookCollection box">
                <h3 className="subtitle subheading-show">Book collection</h3>
                <div className="columns is-multiline">
                  {this.state.user.books.map(book =>
                    <div key={book._id} className="column is-one-third">
                      <Link to={`/books/${book._id}`}>
                        <img src={book.image} alt={book.title} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="column is-third">
              <div className="wishList box">
                <div className="wishList">
                  <h3 className="subtitle subheading-show">Wish List</h3>
                  <div className="columns is-multiline">
                    {this.state.user.bookWish.map(book =>
                      <div key={book._id} className="column is-one-fifth">
                        <Link to={`/books/${book._id}`}>
                          <img src={book.image} alt={book.title} />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}




export default Show
