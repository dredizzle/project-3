import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Auth from '../../lib/Auth'
import Loading from '../common/Loading'
class Show extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: '',
      stories: '',
      errors: '',
      data: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleComment = this.handleComment.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDeleteComments = this.handleDeleteComments.bind(this)
  }

  componentDidMount() {
    fetch(`/api/stories/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => this.setState({ story: res }))
  }
  // componentDidMount() {
  //   this.getData()
  // }
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.getData()
    }
  }
  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }
  handleComment(e) {
    e.preventDefault()
    const token = Auth.getToken()
    axios.post(`/api/stories/${this.props.match.params.id}/comments`, this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    window.location.reload()
  }
  handleDeleteComments(e) {
    const token = Auth.getToken()
    if (e.target.value === Auth.getPayload().sub) {
      axios.delete(`/api/stories/${this.props.match.params.id}/comments/${e.target.id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
    }
    window.location.reload()
  }
  handleDelete() {
    const token = Auth.getToken()
    axios.delete(`/api/stories/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/stories'))
  }
  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.story.createdBy._id
  }
  render() {
    console.log(this.state.story)
    if (!this.state.story) return <Loading />
    // const [{ author, title, image, releaseYear, description, genre, ISBN, pg }] = this.state.book
    // let similar = this.state.books.filter(book => book.genre === this.state.book.genre && book.title !== this.state.book.title)
    // similar = similar.slice(0, 5)
    return (
      <section className="section" id="book-show">
        <div className="columns">
          <div className="column is-two-fifths-desktop is-half-tablet is-full-mobile">
            <figure className="image-show">
              <img src={this.state.story.image} alt={this.state.story.title} />
            </figure>
            <div className="container edit">
              <div className="buttons is-gapless">
                {Auth.isAuthenticated() &&
                  <Link to={{
                    pathname: `/users/${Auth.getPayload().sub}`,
                    state: { story: this.state.story }
                  }}>
                    <button className="button is-light a1">Add to Wish List</button>
                  </Link>
                }
                {this.canModify() &&
                  <div className="level-right is-gapless edit2">
                    <Link to={`/stories/${this.state.story._id}/edit`} className="button is-light e1">Edit</Link>
                    <button className="button is-light d2" onClick={this.handleDelete}>Delete</button>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="column is-two-fifths-desktop is-half-tablet is-full-mobile">
            <div className="show-content">
              <h2 className="subtitle is-4 show" id="author-show">{this.state.story.title}</h2>
              <h2 className="subtitle is-5 show" id="title-show">{this.state.story.author}</h2>
              <hr />
              <h2 className="subtitle is-6 show"><span>Year released:</span> {this.state.story.releaseYear}</h2>


              <h2 className="subtitle is-6 show"><span>Notes: </span>{this.state.story.description}</h2>
              <h2 className="subtitle is-6 show"><span>Notes: </span>{this.state.story.story}</h2>

              <hr />
            </div>
            {/* COMMENTS ===================================================*/}
            <div className="show-content-comments subheading-show">
              Comments
              <article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    {/* <img src="https://profile.actionsprout.com/default.jpeg" /> */}
                  </p>
                </figure>
                <div className="media-content">
                  <div className="field">
                    <p className="control">
                      <textarea className="textarea" name="content" placeholder="Add a comment..." onChange={this.handleChange}></textarea>
                    </p>
                  </div>
                  <nav className="level">
                    <div className="level-left">
                      <div className="level-item">
                        <a className="button is-info" onClick={this.handleComment}>Submit</a>
                      </div>
                    </div>
                  </nav>
                </div>
              </article>
              {this.state.story.comments.map(comment =>
                <article key={comment._id} className="media">
                  <figure className="media-left">
                    <p className="image is-64x64">
                      <Link to={`/users/${comment.user.id}`}>
                        <img src={comment.user.image} />
                      </Link>
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p className="commentText">
                        <strong>{comment.user.username}</strong>  <small>{comment.createdAt.substring(0, comment.createdAt.length - 5).replace(/T/g, ' ')}</small>
                        <br />
                        {comment.content}
                      </p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <a className="level-item">
                          <span className="icon is-small"><i className="fas fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                          <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                        </a>
                        <a className="level-item">
                          <span className="icon is-small"><i className="fas fa-heart"></i></span>
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div className="media-right">
                    <button id={comment._id} value={comment.user._id} className="delete" onClick={this.handleDeleteComments}></button>
                  </div>
                </article>
              )}
            </div>
          </div>
          {/* <div className="column is-one-fifth-desktop is-half-tablet is-full-mobile">
            <div className="similar-show">
              <h2 className="subtitle is-6 subheading-show">You might also like</h2>
              <div>
                {similar.map(book =>
                  <div className="similar-artist-image" key={book._id}>
                    <Link to={`/books/${book._id}`}>
                      <Card {...book} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div> */}
        </div>
      </section>
    )
  }
}
export default Show