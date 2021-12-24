import React, { useState } from "react";
import MovieDisplay from "./MovieDisplay";
import axios from "axios";
import "./Main.css";
import movielogo from './movielogo.png'
import search from './search.png'

function Main() {
  const [movie, setMovie] = useState();
  const [name, setName] = useState(null);

  function handleOnChange(e) {
    setName(e.target.value);
  }
  function searchMovie() {
    if (name !== "" && name !== null) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=69f8e9780dee4fc0e26aec59a5b32f10&query=${name}`
        )
        .then((res) => {
          let movName = name
          if (res.data.results[0]["title"].toLowerCase().includes(movName.toLowerCase())) {
            setMovie(res.data)
          }
        })
        .catch((error) => alert("Enter valid movie name!"));
    }
    else {
      alert("Enter movie name");
    }
  }
  return (
    <div>
      <div className="cont">
        <div className="Search-Cont">
          <h4 className="srch-head">Search For Any Movie</h4>
          <div className="search">
            <input type="text" onChange={handleOnChange} />
            <button className="search-btn" onClick={searchMovie}><img className="search-img" src={search} alt="" /></button>
          </div>
        </div>
      </div>

      <div className="display-container">
        {movie
          ? movie.results.map((element) => {
            return (
              <MovieDisplay
                key={element.id}
                title={element.title}
                image={`https://image.tmdb.org/t/p/w500/${element.poster_path ? element.poster_path : ""}`}
                posterPath={element.poster_path ? element.poster_path : "N/A"}
                rating={element.vote_average ? element.vote_average : "N/A"}
                date={element.release_date ? element.release_date.slice(0, 4) : "N/A"}
                year={element.release_date ? element.release_date : "N/A"}
                movie={movie}
                lang={element.original_language}
                rated={element.adult ? "R 18+" : "PG-13"}
                plot={element.overview ? element.overview : "N/A"}
                votes={element.vote_count ? element.vote_count : "N/A"}
              />
            );
          })
          : <img src={movielogo} alt="" className="mov-logo" />}
      </div>
      <h2><img src={movielogo} alt="" className="movi-logo" id="movi-logo" /></h2>
    </div>
  );
}

export default Main;
