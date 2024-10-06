describe('Teste de Funcionalidade', () => {
  it('CT 001 Cadastro de Usuário', () => {
    cy.visit('https://www.kawasakibrasil.com/pt-br/')
    cy.get('.myHide > .nav-link > div.d-none').click()
    cy.get('#RegistrationEmail').type('certidoesbrasilportugal@hotmail.com')
    cy.get('#RegistrationPassword').type('joao1983')
    cy.get('#ConfirmRegistrationPassword').type('joao1983')
    cy.get('#AgreeToTermsAndConditions').click()
    cy.get(':nth-child(11) > .blackBtn').click()
    cy.get('.validation-summary-errors > span').should('have.text', 'Desculpe, não é possível submeter. Existem campos inválidos no formulário abaixo.')
          })

  it('CT 002 Acesso ao site com dados do Usuário', () => {
    cy.visit('https://www.kawasakibrasil.com/pt-br/')
    cy.get('.myHide > .nav-link > div.d-none').click()
    cy.get('#Email').type('certidoesbrasilportugal@hotmail.com')
    cy.get('#Password').type('joao1983')
    cy.get('#loginForm > .blackBtn').click()
    cy.url().should('eq', 'https://www.kawasakibrasil.com/pt-br/minha-kawasaki')         
           })

  it('CT 003 Busca por concessionária', () => {
    cy.visit('https://www.kawasakibrasil.com/pt-br/')
    cy.get('.myHide > .nav-link > div.d-none').click()
    cy.get('#Email').type('certidoesbrasilportugal@hotmail.com')
    cy.get('#Password').type('joao1983')
    cy.get('#loginForm > .blackBtn').click()
    cy.get('#dealerListFilterInput').type('13023-002')
    cy.contains('Av. Orozimbo Maia - nº 767, Vila Itapura')
    cy.get('#dealerListFilterInput').clear()
    cy.get('#dealerListFilterInput').type('60125-100')
    cy.contains('R. Tiburcio Cavalcante - nº 986, Aldeota') 
    cy.get('[data-index="24"] > a > .headFive').should('have.text', 'Nikkei Motos')
    cy.get('#dealerListFilterInput').clear() 
    cy.get('#dealerListFilterInput').type('12700-000')
    cy.get('#dealerListFilterErr').should('have.text', 'Não foi possível localizar nenhuma Concessionária')
           })

  it('CT 004 Busca por Motocicleta', () => {
    cy.visit('https://www.kawasakibrasil.com/pt-br/minha-kawasaki')
    cy.get('#cat-1').click()
    cy.get('#nav-tab-1').click()
    cy.get('#nav-tab-content-1 > .row > :nth-child(1) > :nth-child(4) > a > img').click()
    cy.get(':nth-child(2) > .infoBox > .align-self-center > .modelHead > .headThree').should('have.text', 'NINJA ZX-10R 40th ANNIVERSARY EDITION')
    cy.get(':nth-child(2) > .infoBox > .row > .col-sm-12 > .mobBtnHelper > .blackBtn').click()
    cy.contains('125.990,00 (frete incluso)')
    cy.get(':nth-child(3) > a > .headSix').click()
            
                   })


          })
