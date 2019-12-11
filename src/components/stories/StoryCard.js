import React from 'react'

const StoryCard = ({ title, author, description }) => {
  return (
    < div className="" >

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="subtitle is-4 is-size-5">{title}</p>
            <p className=" title is-italic is-6 is-size-7">by {author}</p>
            <p className=" title is-italic is-6 is-size-7"> {description}</p>

          </div>
        </div>
      </div >
    </ div>

  )
}

export default StoryCard




