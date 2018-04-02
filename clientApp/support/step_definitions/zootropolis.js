(function() {
  function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == 'function' && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw ((f.code = 'MODULE_NOT_FOUND'), f);
        }
        var l = (n[o] = { exports: {} });
        t[o][0].call(
          l.exports,
          function(e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          },
          l,
          l.exports,
          e,
          t,
          n,
          r
        );
      }
      return n[o].exports;
    }
    var i = typeof require == 'function' && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
  }
  return e;
})()(
  {
    1: [
      function(require, module, exports) {
        'use strict';

        var url = 'http://front-end-deployment.herokuapp.com/app-home-cmp';

        given("I visit the zoo's website", function() {
          cy.visit(url);
        });

        then('I see {string} in the title', function(title) {
          cy.title().should('include', title);
        });

        then('there should be a {string} button', function(btnTitle) {
          cy.get('.nav').should('contain', btnTitle);
        });

        when('I click on the Schedule button', function() {
          cy
            .get('button.btn.btn-info.btn-lg.px-5.mx-3')
            .contains('Schedule')
            .click();
        });

        then('I should be redirected to the schedule component', function() {
          cy.wait(8000);
          //cy.url().should('contain', 'app-schedule-cmp')
          cy.location('pathname').should('include', 'app-schedule-cmp');
        });

        given('I visit the login page', function() {
          cy.visit('http://front-end-deployment.herokuapp.com/app-login-cmp');
        });

        then('I should see the Username input', function() {
          cy.get('.form-control.input-lg').should('contain', 'Username');
        });

        then('I should see the Password input', function() {
          cy.get('.form-control.input-lg.my-2').should('contain', 'Password');
        });

        then('I should see a Log in button', function() {
          cy.get('.btn.btn-info.btn-lg.btn-block').should('contain', 'Sign in');
        });

        when('I type in {string} as the username', function(username) {
          cy.get('[type=text]').type(username);
        });

        when('I type in {string} as the password', function(password) {
          cy.get('.form-control.input-lg.my-2').type(password);
        });

        when('I click the Log In button', function() {
          cy.get('[type=submit]', { timeout: 10000 }).click();
        });

        then('I should be redirected to the administration page', function() {
          cy.location('pathname').should('include', 'app-administrator-cmp');
        });

        given('I have logged in', function() {
          //get the userservice boolean
        });

        when('I click on the {string} Tab', function(tabname) {
          //enter the tab name and tab over to it
        });

        then('I should see the map component', function() {
          //check that the charts are displayed
        });
      },
      {}
    ]
  },
  {},
  [1]
);
