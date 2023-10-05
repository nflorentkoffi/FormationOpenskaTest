describe('Authentification', () => {
    it('Le premier caractère du login devrait être la lettre m en minuscule', () => {
        
        //cy.intercept('POST','**/userinfo.php').as('credentials')

        cy.visit('http://testphp.vulnweb.com/login.php')
        cy.get('[name=uname]').type('test')
        cy.get('input[type=password]').type('test')
        cy.get('input[value=login]').click()

        //cy.wait('@credentials').its('response.statusCode').should('eq',200)

        cy.wait(2000)
        cy.contains('Logout').should('be.visible')
        cy.wait(2000)
        //cy.get('input[name="uemail"]').should('have.attr','value','netsparker@example.com')

        //envoie de la requete
         cy.request('POST', 'http://testphp.vulnweb.com/userinfo.php', {
            uname: 'test',
            pass: 'test',
        }).then((response) => {
            expect(response).property('status').to.equal(200)
        })

    })
});
