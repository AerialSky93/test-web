//npx cypress open
//https://docs.cypress.io/guides/references/best-practices

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/post");
  });

  it("displays two todo items by default", () => {
    cy.contains("first name").should("be.visible");
  });

  it("type error in name field", () => {
    cy.get('[data-qa="first-name"]').type("aaaaaaaaaaaaaaaaaaaaaaaaa");
    cy.contains("must be less than 5 characters").should("be.visible");
  });
});
