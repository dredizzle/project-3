import React from 'react'
import { withRouter } from 'react-router-dom'

const Form = ({ handleChange, handleSubmit, data, errors }) => {
  return (
    <section className="section is-white">
      <div className="container">
        <div className="formBoxStory">
          <form onSubmit={handleSubmit}>
            {/* ******************* */}
            <div className="columns">
              {/* ******************* */}
              <div className="column">
                {/* ******************* */}
                <div className="field">
                  <label className="label">Author</label>
                  <div className="control">
                    <input
                      className="input"
                      name="author"
                      placeholder="eg: The Kinks"
                      onChange={handleChange}
                      value={data.author || ''}
                    />
                  </div>
                  {errors.author && <div className="help is-danger">{errors.author}</div>}
                </div>
                {/* ******************* */}
                <div className="field">
                  <label className="label">Image</label>
                  <div className="control">
                    <input
                      className="input"
                      name="image"
                      placeholder="eg: https://upload.wikimedia.uk/wikipedia/en.jpg"
                      onChange={handleChange}
                      value={data.image || ''}
                    />
                  </div>
                  {errors.image && <div className="help is-danger">{errors.image}</div>}
                </div>
                {/* ******************* */}
                <div className="field">
                  <label className="label">Release Date</label>
                  <div className="control">
                    <input
                      className="input"
                      name="releasedate"
                      onChange={handleChange}
                      value={data.releasedate || ''}
                    />
                  </div>
                  {errors.releasedate && <div className="help is-danger">{errors.releasedate}</div>}
                </div>
                {/* ******************* */}
              </div>
              <div className="column">
                {/* ******************* */}
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      name="title"
                      placeholder="eg: The Kinks are the Village Green Preservation Society"
                      onChange={handleChange}
                      value={data.title || ''}
                    />
                  </div>
                  {errors.title && <div className="help is-danger">{errors.title}</div>}
                </div>
                {/* ******************* */}
                <div className="field">
                  <label className="label">Short description</label>
                  <div className="control">
                    <input
                      className="input"
                      name="description"
                      placeholder="eg: description"
                      onChange={handleChange}
                      value={data.description || ''}
                    />
                  </div>
                  {errors.label && <div className="help is-danger">{errors.label}</div>}
                </div>
                {/* ******************* */}
              </div>
            </div>
            {/* ******************* */}
            <div className="field">
              <label className="label has-text-centered is-h5">Story</label>
              <div className="control">
                <textarea rows="10"
                  className="textarea"
                  name="story"
                  onChange={handleChange}
                  value={data.story || ''}
                />
              </div>
              {errors.story && <div className="help is-danger">{errors.story}</div>}
            </div>
            {/* ******************* */}
            <button className="button is-dark">Share your story</button>
          </form>
        </div>
      </div>
    </section >
  )
}

export default withRouter(Form)
