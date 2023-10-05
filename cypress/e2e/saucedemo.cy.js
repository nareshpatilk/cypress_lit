

describe('E22 saudemo app', () => {

  before(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })
  it('user should login to page', () => {
   
   
  })

  it('user enters username', () => {
    cy.get('[data-test="username"]').type('standard_user');
    
    cy.wait(3000)
  });
  it('User enters password', () => {
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.wait(2000)
  });

  it('user should login', () => {
    cy.get('#login-button').click();
    cy.wait(3000)
  });

  it('User shld add Sauce labs Backpack', () => {
    //cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
    const str = "//div[@class='inventory_item_name' and contains(string(), 'Sauce Labs Backpack!s')]/../../../div[@class='pricebar']/button";
    cy.xpath(str).click();
  });
  it('User shld add Sauce Labs Bike Light', () => {
    //cy.get(':nth-child(2) > .pricebar > .btn_secondary').click();
  });
  

})