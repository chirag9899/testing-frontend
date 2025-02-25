describe("Home Page Counter Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the correct initial counter value", () => {
    cy.get('[data-testid="counter"]').should("contain", "Counter: 0");
  });

  it("should increment the counter when the button is clicked", () => {
    cy.get('[data-testid="increment-btn"]').click();
    cy.get('[data-testid="counter"]').should("contain", "Counter: 1");
  });

  it("should increment multiple times", () => {
    cy.get('[data-testid="increment-btn"]').click().click().click();
    cy.get('[data-testid="counter"]').should("contain", "Counter: 3");
  });
});
