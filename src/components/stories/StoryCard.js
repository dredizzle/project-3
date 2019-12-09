import React from 'react'

const StoryCard = ({ title, author, description }) => {
  return (
    <div className="card-story">
      <div className="card-image">

        <div className="media-content">
          <p className="subtitle is-6">{title}</p>
          <p className="subtitle is-6 ">{description}</p>
        </div>
        <div className="content ">
          <strong> by {author}</strong>
        </div>
      </div>
    </div>
  )
}

export default StoryCard
