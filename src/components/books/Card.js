import React from 'react'

const Card = ({ image, title, author }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={title} />
        </figure>
        <div className="media-content">
          <p className="subtitle is-6 has-text-white">{title}</p>
        </div>
        <div className="content has-text-white">
          <strong> by {author}</strong>
        </div>
      </div>
    </div>
  )
}

export default Card
