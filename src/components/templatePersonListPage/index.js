import React, { useState } from "react";
import PeopleHeader from "../headerPersonList";
import PersonList from "../personList";


const PersonListPageTemplate = ({people, title, action}) => {
  const [nameFilter] = useState("");

  let displayedPeople = people
    .filter(p => {
      return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })


  return (
    <>
      <PeopleHeader title={title} numPeople={displayedPeople.length} />
      <PersonList
        action={action}
        people={displayedPeople}
      ></PersonList>
    </>
  );
};

export default PersonListPageTemplate ;