# Assignment 1 - ReactJS app.

Name: Xianping Tao

## Features.

 + Feature 1 - A TopRatedMovies page is used to display high score movies obtained from TMDB, with the function of filtering based on  name and type. Click on the poster image to display movie details.

 + Feature 2 - A PopularPeople page is used to display popular people obtained from tmdb. Click on the character poster to display the character detail page.

 + Feature 3 - A MovieDetails page is used to display the detailed information of the movie, click the button to see other people’s reviews on this movie, click again to hide them

 + Feature 4 - A WatchList page is used to add the movie you want to watch on the upcoming page, click the button to add a review to this movie

 + Feature 5 - A PersonDetails page displays the person's detailed information, you can click on the movie he participated in and view the detailed information, and there is also a form to write a message


## API Data Model.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/discover/movie - get a list of homepage movies
+ https://api.themoviedb.org/3/movie/${id}/reviews - get the reviews of a specific movie
+ https://api.themoviedb.org/3/movie/upcoming - get a list of upcoming movies
+ https://api.themoviedb.org/3/movie/top_rated - get a list of topRated movies
+ https://api.themoviedb.org/3/person/popular - get a list of popularPeople
+ https://api.themoviedb.org/3/person/${id} - get detailed information of a specific person
+ https://api.themoviedb.org/3/person/${id}/movie_credits - get movie_credits of a specific person

## App Design.

### Component catalogue (If required).

![][storybook]

### UI Design.

![][topRatedMovies]
>Shows a list of topRated movies. Clicking the 'Add to Top' button will delete this movie from this page.

![][popularPeople]
>Shows a list of popular people. Clicking the poster to displays the detailed information of the person.

![][personDetails]
![][personDetails2]
>Shows the Detailed information of the person. Clicking on the movie poster to jump to the detailed page of the movie. Clicking "What do you want to say to him/her?" can add messages.

![][watchList]
>Shows the movies that users want to watch among upcoming movies added by users. Clicking the 'Write a review' can jump to the reviewForm page.

## Routing.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/:id - displays the detailed information of s specific movie.
+ /people/:id - displays the detailed information of a specific person.
+ /movies/watchList - display upcoming movies that user want to watch.
+ /people - display the popular people
+ /movies/topRated - displays the TopRated movies
+ /movies/upcoming - displays the Upcoming movies



### Data hyperlinking.



![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review.

![][perosnLink]
>Clicking the personCard causes the display of that person's details.

![][movieLink]
>Clicking the movie poster causes the display of the movie's details.


---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Xianping Tao

## App Features.
 
+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/movieDetails.spec.js 

![][movieDetail]

+ Movie Review page: Displays the full text of a movie review.

Tests: cypress/integration/movieReviewPage.spec.js 

![][review]

+ Person Details page - Shows the details of a person. Show the movie that this character is in and click the button can dispaly the details of the movie.

Tests: cypress/integration/personDetails-page.spec.js

![][personDetails]

+ TopRated Movies page - Display a list of movies. Clicking on the movie poster can jump to the detailed page. Clicking the Add to Top button can delete the movie from this page.

Test: cypress/integration/topRatedMovies-page.spec.js

![][topRatedMovies]

+ Popular People page - display a list of movies. Clicking on the person poster can jump to the person details page.

Test: cypress/integration/popularPeople-page.spec.js

![][popularPeople]

## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/organizations/3a8fb167-5dec-4b4b-9d91-54c4458f7761/projects



---------------------------------

[storybook]: ./public/storybook.png
[topRatedMovies]: ./public/topRatedMovies.png
[popularPeople]: ./public/popularPeople.png
[personDetails]: ./public/personDetails.png
[personDetails2]: ./public/personDetails2.png
[watchList]: ./public/watchList.png
[reviewLink]: ./public/reviewLink.jpg
[personLink]: ./public/personLink.jpg
[movieLink]: ./public/movieLink.jpg
