describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("Characters");
    cy.get('[data-testid="CHARACTER_1"]', { withinSubject: null })
      .should("exist")
      .click();
    cy.contains("Name");
  });
});
