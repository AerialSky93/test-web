//npx cypress open
//https://docs.cypress.io/guides/references/best-practices

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/getall");
  });

  it("displays two todo items by default", () => {
    cy.contains("CustomerId").should("be.visible");
  });
});
