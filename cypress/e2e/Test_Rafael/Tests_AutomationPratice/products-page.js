import * as selectors from "./components";

export const checkIMGCorrect = () => {
  cy.get(selectors.CORRECT_IMG)
    .should("have.attr", "src")
    .should("include", "sauce-backpack-1200x1500.0a0b85a3.jpg");
};

export const checkIMGWrong = () => {
  cy.get(selectors.CORRECT_IMG)
    .should("have.attr", "src")
    .should("not.include", "sauce-backpack-1200x1500.0a0b85a3.jpg");
};

export const addProduct1 = () => {
  cy.get(selectors.ADD_PRODUCT1).click();
};

export const addProductMulti = () => {
  cy.get(selectors.ADD_PRODUCT1).click();
  cy.get(selectors.ADD_PRODUCT4).click();
  cy.get(selectors.ADD_PRODUCT6).click();
};

export const addProductAll = () => {
  cy.get(selectors.ADD_PRODUCT1).click();
  cy.get(selectors.ADD_PRODUCT2).click();
  cy.get(selectors.ADD_PRODUCT3).click();
  cy.get(selectors.ADD_PRODUCT4).click();
  cy.get(selectors.ADD_PRODUCT5).click();
  cy.get(selectors.ADD_PRODUCT6).click();
};

export const checkQuantityProduts = (count) => {
  cy.get(selectors.CART_QUANTITY)
    .should("have.attr", "span")
    .should(".include", Text(count));
};
