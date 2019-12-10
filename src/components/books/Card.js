import React from 'react'

const Card = ({ image, title, author }) => {
  return (
    < div className="card" >
      <div className="card-image">
        <figure className="image is-2by3">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="subtitle is-4 is-size-5 has-text-white">{title}</p>
            <p className="title is-italic is-6 is-size-7 has-text-light">{author}</p>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Card


