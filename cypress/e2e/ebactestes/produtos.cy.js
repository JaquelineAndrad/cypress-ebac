/// <reference types="cypress" />

describe('Funcionalidade:Produtos', () => {

  beforeEach(() =>{
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  })

    it('Deve selecionar um produto da lista', () => {
     cy.get('.post-3964 > .product-block').click()
        
    });

     it('Deve clicar no primeiro produto da lista', () => {
       cy.get('.block-inner')
      .first()
      .click()
    })
   
  it('Deve clicar no último produto da lista', () => {
    cy.get('.block-inner')
      .last()
      .click()
   })

   it('Deve clicar no produto especifico  da lista', () => {
    cy.get('.block-inner')
      .eq(1)
      .click()

   })
   
    it('Deve clicar no produto pelo nome', () => {
    cy.contains('Apollo Running Short')
      .click()

   })

});
