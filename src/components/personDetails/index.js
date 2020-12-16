import React from "react";
import "./personDetails.css";
import SubMovieList from "../subMovieList";
import PersonHeader from '../headerPerson'
import { Link } from "react-router-dom";


export default ({ person , credit}) => {
  return (
    <>
    <PersonHeader person={person} />
    <div className="leftbox">
  

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
      
      <h6 id="d">Personal information</h6>
        <h6 id="e">Known For</h6> 
        <p id="f">{person.known_for_department}</p>
        

        <h6>Birthday</h6>
        <p>{person.birthday}</p>

        <h6>Place of Birth</h6>
        {person.place_of_birth}
        
          <h6 className="list-group-item ">
            Also Known As
          </h6>
          <p className="list-group-item">
            {person.also_known_as}
          </p>
        
     
    

    </div>
     <div className="rightbox">
     <h3 id="a">{person.name}</h3><br></br>
     <h5 id="b">Biography</h5>
        <p id="c">{person.biography}</p>
     <br></br>
     <h4 id="m">Known For</h4>
     <p id="n"><SubMovieList  person={person} credit={credit}/></p>
  
     </div>
     </> 
  );
};



     
        
      
    
   
   
     
     
    
 