describe('', () => {
    before(() => {
        cy.visit('/login.php')
        cy.get('[name=uname]').type('test')
        cy.get('input[type=password]').type('test')
        cy.get('input[value=login]').click()
        cy.wait(2000)
        cy.contains('Logout')
    });
    it('Se deconnecter du site', () => {
        cy.contains('Logout').click()
        cy.contains('You have been logged out. See you back soon.')
    });
});