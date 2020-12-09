import React from "react";
import "./personDetails.css";

export default ({ person }) => {
  return (
    <>
     <h3>{person.name}</h3>
     <br></br>
     <h5>biography</h5>
     {person.biography}
   
     <ul className="list-group list-group-horizontal">
        <li key="gen" className="list-group-item list-group-item-drak">
           Birthday
        </li>
        <li key="gen" className="list-group-item ">
          {person.birthday}
        </li>
        <li key="pob" className="list-group-item list-group-item-drak">
          Place of Birth
        </li>
        <li key="pob" className="list-group-item ">
          {person.place_of_birth}
        </li>
      </ul>
    
 
    </>
  );
};