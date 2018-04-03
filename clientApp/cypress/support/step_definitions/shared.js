/******************************************************************
 * GIVEN
 ******************************************************************/

given('I have just logged in', () => {
  cy.visit('/');
});

given('I am on the {string} tab', tab => {
  cy.visit(tab);
});

/******************************************************************
 * WHEN
 ******************************************************************/

when('I click on the {string} tab with id of {string}', (tab, id) => {
  cy
    .get(id)
    .should('contain', tab)
    .click();
});

when('I click the back button', () => {
  cy.go('back');
});

/******************************************************************
 * THEN
 ******************************************************************/

then('I can see {string}', text => {
  cy.get(`*:contains(${text})`).should('contain', text);
});

then('the URL is {string}', url => {
  cy.url().should('contain', url);
});

then('I should not see {string} in the URL', url => {
  cy.url().should('not.include', url);
});
