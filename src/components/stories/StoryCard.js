import React from 'react'

const StoryCard = ({ title, author, description }) => {
  return (
    <div className="card-story">




      <p className="subtitle is-size-5">{title}</p>
      <p className=" title is-italic is- is-size-6 ">by {author}</p>
      <p className=" title is-italic is-size-7 ">{description}</p>






    </div>
  )
}

export default StoryCard
