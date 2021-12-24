import React,{useState} from "react";
import ratingMovie from "./ratingMovie.png";
import MovieInfo from "./MovieInfo";


function MovieDisplay({ title, image, posterPath, rating, date,lang,rated,plot,votes,year}) {

const [dis,setDisplay] = useState("none")
const [img,setImg]=useState()

function changeDisplay(){
setImg(image)
setDisplay("flex")
}

  return (
    <div>
      <div className="card" style={{ width: "17rem", height: "33rem"}} onClick={changeDisplay}>
        <input
          type="image"
          className="card-img-top"
          src={posterPath === "N/A"||""||null ? "" : image}
          alt="IMAGE"
        />
        <div className="card-body">
        {title.length>47?<h5 className="card-title">{title.slice(0,44)}...</h5>
        :<h5 className="card-title">{title}</h5>}
          
          <div className="details">
            <h5 className="date">Year: {date}</h5>
            <div className="rating-details">
              <img src={ratingMovie} alt="" className="rating-img"/>
            <h5 className="rating">{rating}</h5>
            </div>
          </div>
        </div>
      </div> 
      <MovieInfo dis={dis} setDis={setDisplay} image={img} posterPath={posterPath} title={title} date={date} lang={lang} rated={rated} rating={rating} plot={plot} votes={votes} year={year}/>
    </div>
  );
}

export default MovieDisplay;
