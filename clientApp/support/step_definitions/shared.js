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

        /******************************************************************
         * GIVEN
         ******************************************************************/

        given('I have just logged in', function() {
          cy.visit('/');
        });

        given('I am on the {string} tab', function(tab) {
          cy.visit(tab);
        });

        /******************************************************************
         * WHEN
         ******************************************************************/

        when('I click on the {string} tab with id of {string}', function(tab, id) {
          cy
            .get(id)
            .should('contain', tab)
            .click();
        });

        when('I click the back button', function() {
          cy.go('back');
        });

        /******************************************************************
         * THEN
         ******************************************************************/

        then('I can see {string}', function(text) {
          cy.get('*:contains(' + text + ')').should('contain', text);
        });

        then('the URL is {string}', function(url) {
          cy.url().should('contain', url);
        });

        then('I should not see {string} in the URL', function(url) {
          cy.url().should('not.include', url);
        });
      },
      {}
    ]
  },
  {},
  [1]
);
