let people;   



  describe("PopularPeople Page ", () => {
    before(() => {
      // Get movies from TMDB and store in movies variable.
      cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          people = response.results
        })
    })

    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(3).find("a").click();
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Popular People");
        cy.get(".badge").contains(20);
      });
    })
})