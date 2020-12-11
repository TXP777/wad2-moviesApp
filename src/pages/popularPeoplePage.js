import React, { useContext } from "react";
import PageTemplate from '../components/templatePersonListPage'
import {PeopleContext} from '../contexts/peopleContext'


const PopularPeoplePage = () => {
  const context = useContext(PeopleContext);
  const people = context.people
  

  return (
      <PageTemplate 
        title='Popular People'
        people={people}
      />
  );
};

export default PopularPeoplePage;