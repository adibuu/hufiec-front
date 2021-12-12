describe("Teams", () => {
  it("should open first available team", () => {
    cy.visit("/druzyny");

    cy.contains("Poznaj nas!").click();

    cy.contains("TELEFON");
  });
});
