import React from "react";
import SubMovie from "../subMovieCard/";
import "./subMovieList.css";

const SubMovieList = ({credit})=> {
  
  const subMovieCards = credit ?(
    credit.crew.map(m => (
    <SubMovie key={m.id} person={m}  />
  ))
  ):(" ");
  return <div className="row movies bg-info">{subMovieCards}</div>;
};

export default SubMovieList;
