import React, {useContext } from "react";

import AddToWatchListButton from '../components/buttons/addToWatchList'
import {MoviesContext} from '../contexts/moviesContext'
import PageTemplate from '../components/templateMovieListPage'

const UpcomingMoviesPage = () => {


  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  
    return !("watchList" in m);
  });



  return (
      <PageTemplate
        title='Upcoming Movies'
        movies={movies}
        action={(movie) => {
          return <AddToWatchListButton movie={movie} /> 
        }}
      />
  );
};

export default UpcomingMoviesPage;