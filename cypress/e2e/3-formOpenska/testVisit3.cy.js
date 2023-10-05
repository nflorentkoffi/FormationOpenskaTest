describe('Authentification', () => {
    it('Se connecter depuis la page daccueil en utilisant un credential', () => {
        //ecoute de la requete post
        //cy.intercept('POST','**/userinfo.php').as('credentials')

        cy.visit('https://example.cypress.io/commands/network-requests')

        //envoie de la requete
        cy.request('POST', 'http://testphp.vulnweb.com/userinfo.php', {
          uname: 'test',
          pass: 'test',
        }).as('post')
        //cy.get('[name=uname]').type('test')
        //cy.get('input[type=password]').type('test')
        //cy.get('input[value=login]').click()
        //cy.wait('@credentials').its('response.statusCode').should('eq',200)

        //cy.wait(2000)
        //cy.contains('Logout').should('be.visible')
        //cy.wait(2000)
        //cy.get('input[name="uemail"]').should('have.attr','value','netsparker@example.com')
    })

    it.only('cy.request() - make an XHR request', () => {
      // https://on.cypress.io/request
      cy.intercept('GET','https://jsonplaceholder.cypress.io/comments').as('testVisit3')
      cy.request('https://jsonplaceholder.cypress.io/comments').debug().should((response) => {
          expect(response.status).to.eq(200)
          // the server sometimes gets an extra comment posted from another machine
          // which gets returned as 1 extra object
          expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
          expect(response).to.have.property('headers')
          expect(response).to.have.property('duration')
        })
    })
});
