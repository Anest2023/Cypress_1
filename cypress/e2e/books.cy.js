
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })
})


it("Should successfully login", () => {
  cy.visit('/');
  

  cy.login('test@test.com', 'test');

  cy.contains('Log out').should('be.visible').and('not.be.disabled');

  cy.contains("Добро пожаловать test@test.com").should("be.visible");
});


it("Should not login with empty login", () => {
  cy.visit('/');


  cy.login(' ', 'test');

  cy.get("#mail")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
  cy.get("#mail")
    .then(($el) => $el[0].validationMessage)
    .should("contain", "Заполните это поле");
    
});


it("Should not login with empty password", () => {
  cy.visit('/');

  cy.contains("Log in").click();
  cy.get("#mail").type("test@test.com");
  cy.contains("Submit").click();
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");

});


describe('Favorites', () => {
  it('passes', () => {
    cy.visit('/')
  })
})



it("Favorites is visible, is not desabled", () => {
  cy.visit('/');

  cy.login('test@test.com', 'test');


  cy.contains('Favorites').should('be.visible').and('not.be.disabled');

});




it("Add new is visible, is not desabled", () => {
  cy.visit('http://localhost:3000/');

  cy.login('test@test.com', 'test');

  cy.contains('Add new').should('be.visible').and('not.be.disabled');

});


it("Book description is visible", () => {
  cy.visit('/');

  cy.login('test@test.com', 'test');

  cy.contains('Add new').click();

   cy.contains('Book description');

});



