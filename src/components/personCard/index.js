import React from "react";
import { Link } from "react-router-dom";
import "./personCard.css";
import "../../globals/fontawesome";

const PersonCard = ({person}) => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/people/${person.id}`}>
        <img
          className="card-img-tag center "
          alt={person.name}
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-footer">
            <h4>{person.name}</h4> 
             {person.known_for.map(t =>(
              <span>{t.title}</span>
            ))}

        </div>
      </div>
    </div>
  );
};

export default PersonCard;