import React, { useContext } from "react";
import PageTemplate from '../components/templatePersonListPage'
import {PeopleContext} from '../contexts/peopleContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const PopularPeoplePage = () => {
  const context = useContext(PeopleContext);
  const people = context.people.filter((p) => {  
    return !("favourite" in p);
  });

  return (
      <PageTemplate 
        title='Popular People'
        people={people}
        action={(person) => {
          return <AddToFavoritesButton people={person} /> 
        }}
      />
  );
};

export default PopularPeoplePage;