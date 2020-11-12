import React, { useState, useEffect,useContext } from "react";
import AddToWatchListButton from '../components/buttons/addToWatchList'
import {MoviesContext} from '../contexts/moviesContext'
import { getUpcomingMovies } from "../api/tmdb-api";

import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  const context = useContext(MoviesContext);

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