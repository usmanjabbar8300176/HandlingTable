class Browser {
    browserNavigaion() {
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('[aria-label="Free trial"]').click();
        cy.wait(5000);
        cy.go('back');
        cy.wait(5000);
        cy.go('forward');
        cy.wait(5000);

    }
}
export default Browser;