import React from "react";
import "./Main.css";

function MovieInfo({
  dis,
  setDis,
  image,
  posterPath,
  title,
  date,
  lang,
  rating,
  plot,
  rated,
  votes,
  year
}) {
  function cutBox() {
    setDis("none");
  }

  return (
    <div>
      <div
        className="info-Container"
        id="info-Container"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", display: `${dis}` }}
      >
        <h3 className="cut" onClick={cutBox}>
          X
        </h3>
        <div className="main-cont">
          <div className="mov-img">
            <input
              type="image"
              className="card-img-top"
              src={posterPath === null ? "" : image}
              alt="IMAGE"
            />
          </div>
          <div className="mov-details">
            <h4 className="heading">
              {title}
            </h4>
            <br />
            <h5 className="det">
              <span className="head">Year: </span>
              {date.slice(0, 4)}
            </h5>
            <h5 className="det">
              <span className="head">Language: </span>
              {lang}
            </h5>
            <h5 className="det">
              <span className="head">Rated: </span>
              {rated}
            </h5>
            <h5 className="det">
              <span className="head">Rating: </span>
              {rating} ({votes})
            </h5>
            <h5 className="det">
              <span className="head">Released: </span>
              {year}
            </h5>
            <h5 className="det">
              <span className="head">Plot: </span>
            <div className="plot">
              {plot}
            </div>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
