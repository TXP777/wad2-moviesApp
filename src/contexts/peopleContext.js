import React, { useEffect, createContext, useReducer } from "react";
import { getPeople } from "../api/tmdb-api";


export const PeopleContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { people: action.payload.people};
    case "add-favorite":
      return {
        people: state.movies.map((p) =>
          p.id === action.payload.people.id ? { ...p, favorite: true } : p
        ),
       
      };
    
      

    default:
      return state;
  }
};

const PeopleContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { people: [] });

const addToFavorites = (personId) => {
  const index = state.people.map((p) => p.id).indexOf(personId);
  dispatch({ type: "add-favorite", payload: { person: state.people[index] } });
};



  useEffect(() => {
    getPeople().then((people) => {
      dispatch({ type: "load", payload: { people } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <PeopleContext.Provider
      value={{
        people: state.people,
        addToFavorites: addToFavorites,
    
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;