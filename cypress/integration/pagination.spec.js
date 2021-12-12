describe("Pagination", () => {
  it("should move to next page", () => {
    cy.visit("/aktualnosci/1");

    cy.contains("Następna strona").click();

    cy.url().should("include", "/aktualnosci/2");
  });

  it("should move to previous page", () => {
    cy.visit("/aktualnosci/2");

    cy.contains("Poprzednia strona").click();

    cy.url().should("include", "/aktualnosci/1");
  });

  it("should render 5 articles", () => {
    cy.visit("/");

    cy.contains("5").click();

    cy.get("h1").should("have.length", 5);
  });

  it("should render 10 articles", () => {
    cy.visit("/");

    cy.contains("10").click();

    cy.get("h1").should("have.length", 10);
  });

  it("should render 15 articles", () => {
    cy.visit("/");

    cy.contains("15").click();

    cy.get("h1").should("have.length", 15);
  });
});
