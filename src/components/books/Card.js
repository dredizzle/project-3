import React from 'react'

const Card = ({ image, title, author }) => {
  return (
    < div className="card" >
      <div className="card-image">
        <figure className="image is-29.7by21">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 has-text-white">{title}</p>
            <p className="subtitle is-6 has-text-light">{author}</p>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Card


