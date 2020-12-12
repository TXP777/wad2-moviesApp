import React from "react";
import { Link } from "react-router-dom";
import "./subMovieCard.css";
import "../../globals/fontawesome";

const SubMovieCard = ({person}) => {
  return (
    <div className="col-sm-2">
      <div className="card">
      <Link to={`/movies/${person.id}`}>
        <img
          className="card-img-tag center "
          alt={person.title}
          src={
            person.poster_path
              ? `https://image.tmdb.org/t/p/w500/${person.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{person.title}</h4>
      
        </div>
        
      </div>
    </div>
  );
};
        
export default SubMovieCard ;