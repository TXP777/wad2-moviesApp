import React from "react";
import "./personDetails.css";
import SubMovieList from "../subMovieList";
import PersonHeader from '../headerPerson'
import { Link } from "react-router-dom";


export default ({ person , credit}) => {
  return (
    <>
    <PersonHeader person={person} />
    <div class="leftbox">
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
      
      <h5>Personal information</h5>
        <h6>Known For</h6> 
        <p>{person.known_for_department}</p>
        

        <h6>Birthday</h6>
        {person.birthday}

        <h6>Place of Birth</h6>
        {person.place_of_birth}
        <h6>Also Known As</h6>
        {person.also_known_as}
        

    </div>
     <div class="rightbox">
     <h3>{person.name}</h3><br></br>
     <h5>Biography</h5>
        <span>{person.biography}</span>
     <br></br>
     <h4>Known For</h4>
     <span ><SubMovieList  person={person} credit={credit}/></span>
     </div>
     </> 
  );
};



     
        
      
    
   
   
     
     
    
 