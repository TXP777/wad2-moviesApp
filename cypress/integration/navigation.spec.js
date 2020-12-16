let movies;
const movieId = 602211; // Enola Holmes movie id
let reviews;
let upcomingMovies;
const upcomingMovieId = 551804;



describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
      cy.request(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")
        .then((response) => {
          upcomingMovies = response.results;
        });
        cy.request(
          `https://api.themoviedb.org/3/movie/${upcomingMovieId}/reviews?api_key=${Cypress.env(
            "TMDB_KEY"
          )}`
        )
          .its("body")
          .then((response) => {
            console.log(response);
            reviews = response.results;
          });

      
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      cy.get("nav").find("li").eq(4).find("a").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite Movies");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Upcoming Movies");
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get("nav.navbar-brand").find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Discover Movies");
    });
  });
  
  describe("From the upcomingMovies page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(1).find("a").click();
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${upcomingMovies[1].id}`);
      cy.get("h2").contains(upcomingMovies[1].title);
    });
    it("should allow navigation from site header", () => {
      cy.get("nav").find("li").eq(5).find("a").click();
      cy.url().should("include", `/watchList`);
      cy.get("h2").contains("Watch List Movies");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("not.include", `/watchList`);
      cy.get("h2").contains("Upcoming Movies");
    
    });
  });
  /**describe("From the Movie Details page ", () => {
    beforeEach(() => {
      cy.visit(`/movies/${movieId}`);
    });
    it("should change browser URL when show/hide reviews is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movieId}/reviews`);
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", `/movies/${movieId}/reviews`);
    });
    it("navigate to the full review page when a 'Full Review' link is clicked", () => {
      cy.contains("Show Reviews").click();    
      cy.url().should("include", `/movies/${movieId}/reviews`); 
      cy.contains("Full Review").click();
      cy.url().should("include", `/reviews/${reviews[0].id}`); 
    });
  });**/
  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(4).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
    });
  });
  describe("From the Watch List page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(5).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${upcomingMovies[0].id}`);
      cy.get("h2").contains(upcomingMovies[0].title);
    });
  });
  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("Discover Movies");
    });
    it("should navigate from favorites page to movie details and back", () => {
      cy.contains("Add to Favorites").click();
      cy.contains("Favorites").click();
      cy.get(".card").eq(0).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("include", `/favorite`);
      cy.get("h2").contains("Favorite Movies");      
    });
    
});
describe("The upcomingMovies' Go Back button", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("nav").find("li").eq(1).find("a").click();
  });
  it("should navigate from upcomingMovies page to movie details and back", () => {
    cy.get(".card").eq(1).find("img").click();
    cy.get("svg[data-icon=arrow-circle-left]").click();
    cy.url().should("include", `/movies/upcoming`);
    cy.get("h2").contains("Upcoming Movies");
  });
  it("should navigate from watchList movies page to movie details and back", () => {
  cy.contains("Add to Watch List").click();
  cy.contains("WatchList").click();
  cy.get(".card").eq(0).find("img").click();
  cy.get("svg[data-icon=arrow-circle-left]").click();
  cy.url().should("include", `/watchList`);
  cy.get("h2").contains("Watch List Movies");      
});
});
describe("The personDetails' Go Back button", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("nav").find("li").eq(3).find("a").click();
  });
  it("should navigate from PopularPeople page to person details and back", () => {
    cy.get(".card").eq(1).find("img").click();
    cy.get("nav").find("li").eq(3).find("a").click();
    cy.url().should("include", `/people`);
    cy.get("h2").contains("Popular People");
  });
});
});