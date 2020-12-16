let personId = null
let person;
let credit;

describe("Person Details Page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
            "TMDB_KEY"
            )}&language=en-US&include_adult=false&page=1`
      )
        .its("body")
        .then((response) => {
          return response.results[2].id;
        })
        .then((arbitraryPersonIdignored) => {
          personId = arbitraryPersonIdignored
          return cy
            .request(
              `https://api.themoviedb.org/3/person/${personId}?api_key=${Cypress.env(
                "TMDB_KEY"
              )}`
            )
            .its("body");
        })
        .then((personDetails) => {
          person = personDetails;
          return personDetails.id;
        })
    
      
        
      


       
      
      
  });
  beforeEach(() => {
    cy.visit(`/`);
    cy.get("nav").find("li").eq(3).find("a").click();
    cy.get(".card").eq(2).find("img").click();
  });


  it("should display the person's details", () => {
    cy.get("#a").contains(person.name);
    cy.get("#b").contains("Biography");
    cy.get("#c").should('contain','Jason Statham');
    cy.get("#d").contains("Personal information");
    cy.get("#e").contains("Known For");
    cy.get("#f").contains(person.known_for_department);
    cy.get("#m").contains("Known For");
    
    
    



    
    



  


  });
  it("should display the poster image", () => {
    cy.get("img")
      .should("have.attr", "src")
      .should("include", person.profile_path);
  });

});