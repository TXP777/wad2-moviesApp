import GenresContextProvider from "./contexts/genresContext";
import MoviesContextProvider from "./contexts/moviesContext";
import SiteHeader from './components/siteHeader'
import React, {lazy,Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"; 
import PeopleContextProvider from "./contexts/peopleContext";
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const UpcomingMoviesPage = lazy(() => import("./pages/upcomingMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const PersonPage = lazy(() => import("./pages/personDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoritesMoviesPage"));
const WatchListMoviesPage = lazy(() => import("./pages/watchListMoviesPage"));
const PopularPeoplePage = lazy(() => import("./pages/popularPeoplePage"));
const TopRatedMoviesPage = lazy(() => import("./pages/topRatedMoviesPage"));
const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />      
        <div className="container-fluid">
        <PeopleContextProvider>
        <MoviesContextProvider>  
        <GenresContextProvider>  
        <Suspense fallback={<h1>Loading page....</h1>}>
        <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <Route exact path="/movies/topRated" component={TopRatedMoviesPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/watchList" component={WatchListMoviesPage} />
          <Route exact path="/people" component={PopularPeoplePage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/people/:id" component={PersonPage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </Suspense>
        </GenresContextProvider>  
        </MoviesContextProvider>  
        </PeopleContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));