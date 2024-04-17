class Table {

    hadlingTable() {

        // verify book table is available
        cy.get('table[name="BookTable"]').should('be.visible')
        // Any location value
        cy.get('table[name="BookTable"]').contains('td', 'Learn Selenium').should('be.visible')
        cy.get('table[name="BookTable"]').contains('td', 'Learn Java').should('be.visible')

        cy.get('table[name="BookTable"]').contains('td', 'Amod').should('be.visible')
        cy.get('table[name="BookTable"]').contains('td', '3000').should('be.visible')


        cy.get('table[name="BookTable"]').contains('td', 'Master In Java').should('be.visible')
        cy.get('table[name="BookTable"]').contains('td', 'Javascript').should('be.visible')

        //verify elements in <th> tag
        cy.get('table[name="BookTable"]').contains('th', 'BookName').should('be.visible')
        cy.get('table[name="BookTable"]').contains('th', 'Price').should('be.visible')

        //verify elements by using CSS selector
        cy.get('table[name="BookTable"]> tbody >tr:nth-child(3) td:nth-child(2)').contains('Mukesh').should('be.visible')
        cy.get('table[name="BookTable"]> tbody >tr:nth-child(5) td:nth-child(3)').contains('Selenium').should('be.visible')

        //verify the book name 'Master in Java' whose author is amod
        cy.get('table[name="BookTable"]> tbody >tr> td:nth-child(2)').each(($e, index, $list) => {

            const text = $e.text()
            if (text.includes('Amod')) {
                cy.get('table[name="BookTable"]> tbody >tr> td:nth-child(1)').eq(index).then(function (_bname) {
                    const bookname = _bname.text()
                    expect(bookname).to.equal('Master In Java')
                })
            }
        })
    }

}
export default Table;