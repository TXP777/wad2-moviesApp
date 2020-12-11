import React from "react";
import Person from "../personCard/";
import "./personList.css";

const PersonList = ({people}) => {
  const personCards = people.map(p => (
    <Person key={p.id} person={p} />
  ));
  return <div className="row people bg-info">{personCards}</div>;
};

export default PersonList;