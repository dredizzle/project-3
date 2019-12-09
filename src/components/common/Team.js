import React from 'react'

const Team = () => {
  return (
    <div className="container teamContainer">
      <div className=" section columns  teambox">
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img id="face" className="is-rounded" src="https://i.imgur.com/OgeplkZ.jpg" alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Andre Urbani</strong> <small>111@gmail.com</small>
                    <br />
                    Git Master
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img id="face" className="is-rounded" src="https://i.imgur.com/OgeplkZ.jpg" alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Ustin Vaskin</strong> <small>111@gmail.com</small>
                    <br />
                    Style nerd
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className=" section columns  teambox">
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img id="face" className="is-rounded" src="https://i.imgur.com/OgeplkZ.jpg" alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong> Denisa Mihaela Tanase </strong> <small>111@gmail.com</small>
                    <br />
                    API Master
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img id="face" className="is-rounded" src="https://i.imgur.com/OgeplkZ.jpg" alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Sandor Desi</strong> <small>111@gmail.com</small>
                    <br />
                    Seeder
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
