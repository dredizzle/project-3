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
        bookWish: [],
        stories: [],
        storyWish: []

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
      .then(() => {
        return this.handleStoryWish()
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
  handleStoryWish() {
    const token = Auth.getToken()
    const currentUser = this.state.user._id
    const storyWish = this.state.user.storyWish.slice()
    storyWish.push(this.props.location.state.story)
    const user = { ...this.state.user, storyWish }
    axios.put(`/api/users/${currentUser}`, { storyWish: storyWish }, { headers: { 'Authorization': `Bearer ${token}` } })
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
      <section className="UserShow">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-your-edit">
                  <div className="user-menue box">
                    {this.canModify() &&
                      <div className="level-left">
                        <Link to={`/users/${_id}/edit`} className="button  is-light is-fullwidth">Edit your Profile</Link>
                      </div>
                    }
                    <br></br>
                    <div className="level-left">
                      <Link to={`/users/${_id}/edit`}
                        className="button  is-light is-fullwidth">All Users (coming soon)</Link>
                    </div>
                    <br></br>
                    <div className="level-left">
                      <Link to={`/users/${_id}/edit`}
                        className="button  is-light is-fullwidth">Messages (coming soon)</Link>
                    </div>
                  </div>
                </article>
                <article className="tile is-child notification is-your-books">
                  <div className="bookCollection box">
                    <h3 className="subtitle ">Your Books</h3>
                    <div className="columns is-multiline">
                      {this.state.user.books.map(book =>
                        <div key={book._id} className="column is-one-fifth">
                          <Link to={`/books/${book._id}`}>
                            <img src={book.image} alt={book.title} />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-your-user">
                  <div className="user-info box">
                    <div className="user-image">
                      <figure>
                        <img className="UserImg" src={this.state.user.image} alt={this.state.user.username} />
                      </figure>
                    </div>
                    <div className="username">
                      <h3 className="">{this.state.user.username}</h3>
                    </div>
                    <div className="user-bio">
                      <p className="profile">{this.state.user.bio}</p>
                    </div>
                    {this.canModify() &&
                      <div className="level-left">
                        <Link to={`/users/${_id}/edit`} className="button  is-light">Edit</Link>
                      </div>
                    }
                  </div>
                </article>
                {/* Fixed */}
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-your-stories">
                {/* STORY COLLECTION EDIT  */}
                <div className="column is-fifth">
                  <div className="bookCollection box">
                    <h3 className="subtitle ">Your Stories</h3>
                    {/* <div className="columns is-multiline">
                      {this.state.user.stories.map(story =>
                        <div key={story._id} className="column is-one-fifth">
                          <Link to={`/stories/${story._id}`}>
                            <p>{story.title}</p>
                          </Link>
                        </div>
                      )}
                    </div> */}
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article id="DescriptionShowBook" className="tile is-child notification">
              <div className="content">
                {/* Wish List */}
                <h3 className="subtitle ">Book Wish List</h3>
                <div className="columns is-multiline">
                  {this.state.user.bookWish.map(book =>
                    <div key={book._id} className="column is-half">
                      <Link to={`/books/${book._id}`}>
                        <img src={book.image} alt={book.title} />
                      </Link>
                      <p>{book.title}</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article id="DescriptionShowBook" className="tile is-child notification">
              <div className="content">
                {/* //Favourite Stories (Amend like in Wish list to save and add fav stories ) */}
                <h3 className="subtitle">Favourite Stories</h3>
                <div className="columns is-multiline">
                  {/* {this.state.user.storyWish.map(story => */}
                  {/* <div key={story._id} className="column is-half"> */}
                  {/* <Link to={`/stories/${story._id}`}>
                      <img src={story.image} alt={story.title} />
                    </Link>
                    <p>{story.title}</p>
                  </div> */}
                  {/* )} */}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section >
    )
  }
}
export default Show