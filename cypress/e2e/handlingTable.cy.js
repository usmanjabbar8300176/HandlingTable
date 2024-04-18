import Table from "../support/pageObject/handlingTable";
const table = new Table()


describe('Handling table in cypress', () => {
  before(function () {
    //login Url
    cy.visit('/');
  });

  it('html table', () => {
    table.hadlingTable()

  })
  


});