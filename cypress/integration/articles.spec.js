describe("Articles", () => {
  it("should open first available article and go back", () => {
    cy.visit("/");

    cy.get("h1").first().click();

    cy.contains("Powrót").click();

    cy.url().should("include", "/aktualnosci/1");
  });

  it("should open first available article and print it", () => {
    cy.visit("/");

    cy.get("h1").first().click();

    cy.contains("Drukuj artykuł").click();
  });
});
