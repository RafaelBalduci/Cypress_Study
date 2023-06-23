import * as selectors from "./components";

export const access = () => {
  cy.visit("https://www.saucedemo.com/");
};

export const performanceStart = () => {
  return performance.now();
};

export const performanceEnd = (timeNow) => {
  cy.get(selectors.CORRECT_IMG)
    .should("have.attr", "src")
    .should("include", "sauce-backpack-1200x1500.0a0b85a3.jpg")
    .then(() => {
      expect(performance.now() - timeNow).to.be.lessThan(7000);
    });
};

export const fillUserStandard = () => {
  const userS = cy.get(selectors.USER_FIELD);
  userS.clear().type(selectors.stan_username);
};

export const fillUserLock = () => {
  const userL = cy.get(selectors.USER_FIELD);
  userL.clear().type(selectors.lock_username);
};

export const fillUserProblem = () => {
  const userP = cy.get(selectors.USER_FIELD);
  userP.clear().type(selectors.problem_username);
};

export const fillUserGlicth = () => {
  const userG = cy.get(selectors.USER_FIELD);
  userG.clear().type(selectors.glicth_username);
};

export const fillPass = () => {
  const pass = cy.get(selectors.PASS_FIELD);
  pass.clear().type(selectors.password_user);
};

export const login = () => {
  const login = cy.get(selectors.LOGIN_BTN);
  login.click();
};

export const erroUserLock = () => {
  cy.get(selectors.ERROR_INFO)
    .invoke("text")
    .should("eq", "Epic sadface: Sorry, this user has been locked out.");
};

export const singIN = () => {
  cy.visit("https://www.saucedemo.com/");
  const userS = cy.get(selectors.USER_FIELD);
  userS.clear().type(selectors.stan_username);
  const pass = cy.get(selectors.PASS_FIELD);
  pass.clear().type(selectors.password_user);
  const login = cy.get(selectors.LOGIN_BTN);
  login.click();
  cy.get(selectors.CORRECT_IMG)
    .should("have.attr", "src")
    .should("include", "sauce-backpack-1200x1500.0a0b85a3.jpg");
};
