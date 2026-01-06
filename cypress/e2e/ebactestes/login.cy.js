/// <reference types="cypress" />

describe('Login - cenário positivo', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.get('.icon-user-unfollow').click()
  })

  it('Deve efetuar login com sucesso', () => {
    cy.get('#username').type('jaque123@email.com')
    cy.get('#password').type('123Jaque**')
    cy.get('#rememberme').check()
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-MyAccount-content').should('be.visible')
  })

})

describe('Login - cenário negativo', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.get('.icon-user-unfollow').click()
  })

  afterEach(function () {
  if (this.currentTest.state === 'failed') {
    cy.screenshot()
  }
})


  it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('jaque123@email.com')
    cy.get('#password').type('123Ja55e**')
    cy.get('[name="login"]').click()
    cy.contains('Erro').should('be.visible')
  })

})
