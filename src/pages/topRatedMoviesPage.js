import React, {useContext } from "react";

import AddToTopButton from '../components/buttons/addToTop'
import {MoviesContext} from '../contexts/moviesContext'
import PageTemplate from '../components/templateMovieListPage'

const TopRatedMoviesPage = () => {


  const context = useContext(MoviesContext);
  const movies = context.topRated.filter((m) => {  
    return !("top" in m);
  });



  return (
      <PageTemplate
        title='TopRated Movies'
        movies={movies}
        action={(movie) => {
          return <AddToTopButton movie={movie} /> 
        }}
      />
  );
};

export default TopRatedMoviesPage;