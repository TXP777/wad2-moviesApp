export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };
  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      },
      method:'get',
    }
    ).then(res => res.json());
  };
  //export const getTopRatedMovies = id => {
  //  return fetch(
  //    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //  )
  //    .then(res => res.json())
  //    .then(json => json.results);
  //};
  export const getTopRatedMovies = id => {
    return fetch(
      '/api/topRated',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };
  //export const getPeople = () => {
  //  return fetch(
  //    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  //  )
  //    .then(res => res.json())
  //    .then(json => json.results);
  //};
  export const getPeople = () => {
    return fetch(
      '/api/people',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };
  //export const getPerson = id => {
  //  return fetch(
  //    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //  ).then(res => res.json());
  //};
  export const getPerson = id => {
    return fetch(
      '/api/person',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };

  export const getCredits = id => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then(res => res.json());
   
  };
  
  
  