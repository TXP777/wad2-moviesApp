import AddMovieReviewPage from './pages/addMovieReviewPage'
import GenresContextProvider from "./contexts/genresContext";
import MoviesContextProvider from "./contexts/moviesContext";
import UpcomingMoviesPage from './pages/upcomingMoviesPage' 
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage' 
import WatchListMoviesPage from './pages/watchListMoviesPage' 

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />      
        <div className="container-fluid">
        <MoviesContextProvider>  
        <GenresContextProvider>  
        <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/watchList" component={WatchListMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>  
        </MoviesContextProvider>  
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));