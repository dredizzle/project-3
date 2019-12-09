import React from 'react'

const StoryCard = ({ title, author, description }) => {
  return (
    <div className="card">
      <div className="card-image">

        <div className="media-content">
          <p className="subtitle is-6 has-text-white">{title}</p>
          <p className="subtitle is-6 has-text-white">{description}</p>
        </div>
        <div className="content has-text-white">
          <strong> by {author}</strong>
        </div>
      </div>
    </div>
  )
}

export default StoryCard
