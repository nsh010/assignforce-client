/******************************************************************
 * GIVEN
 ******************************************************************/

given('I have just logged in', () => {
  cy.visit('/');
  if (cy.get('#auth0-lock-container-1')) {
    console.log('Need to log in');
    cy.get('input[name=email]').type('tester@revature.com');
    cy.get('input[name=password]').type('24wP~u3jt1s$qb"S]/e^Qim%>');
    cy.get('button.auth0-lock-submit').click();
  } else {
    console.log('Already logged in');
  }
});

/******************************************************************
 * WHEN
 ******************************************************************/

when('I click on the {string} tab in the {string}', (tab, navbar) => {
  cy
    .get(`[data-cy="${navbar}"]`)
    .contains(tab)
    .click();
});

// when('I click on the {string} tab with id of {string}', (tab, id) => {
//   cy
//     .get(id)
//     .should('contain', tab)
//     .click();
// });

/******************************************************************
 * THEN
 ******************************************************************/

then('I can see {string}', text => {
  cy.get(`*:contains(${text})`).should('contain', text);
});

then('the URL is {string}', url => {
  cy.url().should('contain', url);
});
