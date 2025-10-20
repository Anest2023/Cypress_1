describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})


it("Should successfully login", () => {
  cy.visit('http://localhost:3000/');
  
  cy.contains('Log in').click();
  cy.get('#mail').type('test@test.com');
  cy.get ('#pass').type('test');
  cy.contains('Submit').click();

  cy.contains('Log out').should('be.visible').and('not.be.disabled');

  cy.contains("Добро пожаловать test@test.com").should("be.visible");
});


it("Should not login with empty login", () => {
  cy.visit('http://localhost:3000/');
  cy.contains("Log in").click();
  cy.get("#mail").type(" ");
  cy.get("#pass").type("test");
  cy.contains("Submit").click();
  cy.get("#mail")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
  cy.get("#mail")
    .then(($el) => $el[0].validationMessage)
    .should("contain", "Заполните это поле");
    
});


it("Should not login with empty password", () => {
  cy.visit('http://localhost:3000/');
  cy.contains("Log in").click();
  cy.get("#mail").type("test@test.com");
  cy.contains("Submit").click();
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");

});


it("Favorites is visible, is not desabled", () => {
  cy.visit('http://localhost:3000/');
  
  cy.contains('Log in').click();
  cy.get('#mail').type('test@test.com');
  cy.get ('#pass').type('test');
  cy.contains('Submit').click();

  cy.contains('Favorites').should('be.visible').and('not.be.disabled');

});




it("Add new is visible, is not desabled", () => {
  cy.visit('http://localhost:3000/');
  
  cy.contains('Log in').click();
  cy.get('#mail').type('test@test.com');
  cy.get ('#pass').type('test');
  cy.contains('Submit').click();

  cy.contains('Add new').should('be.visible').and('not.be.disabled');

});


it("Dook description is visible", () => {
  cy.visit('http://localhost:3000/');
  
  cy.contains('Log in').click();
  cy.get('#mail').type('test@test.com');
  cy.get ('#pass').type('test');
  cy.contains('Submit').click();

  cy.contains('Add new').click();

   cy.contains('Book description');

});



