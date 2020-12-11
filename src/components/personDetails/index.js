import React from "react";
import "./personDetails.css";

export default ({ person }) => {
  

  return (
    <>
     <h3>{person.name}</h3>
     <br></br>
     <h4>Biography</h4>
        <span>{person.biography}</span>
     <br></br>
     <h4>Known For</h4>
     
        
      
    
   
   
     
     
    
 
    </>
  );
};