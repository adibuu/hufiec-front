describe("Navbar", () => {
  it("should open articles page", () => {
    cy.visit("/");

    cy.contains("AKTUALNOŚCI").click();

    cy.url().should("include", "/aktualnosci");
  });

  it("should open teams page", () => {
    cy.visit("/");

    cy.contains("DRUŻYNY").click();

    cy.url().should("include", "/druzyny");
  });

  it("should open documents page", () => {
    cy.visit("/");

    cy.contains("DOKUMENTY").click();

    cy.url().should("include", "/dokumenty");
  });

  it("should open gallery page", () => {
    cy.visit("/");

    cy.contains("GALERIA").click();

    cy.url().should("include", "/galeria");
  });

  it("should open contact page", () => {
    cy.visit("/");

    cy.contains("KONTAKT").click();

    cy.url().should("include", "/kontakt");
  });

  it("logo click should open articles page", () => {
    cy.visit("/");

    cy.contains("AKTUALNOŚCI").click();

    cy.url().should("include", "/aktualnosci");
  });
});
