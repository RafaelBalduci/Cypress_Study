//import * as login from "./login-page";
//import * as product from "./products-page";

describe("First automation test", () => {
  it("Login standard user", () => {
    cy.visit(
      "https://alm-prod.vodafone.com/qcbin/authentication-point/discovery.jsp?redirect_uri=https%3A%2F%2Falm-prod.vodafone.com%3A443%2Fqcbin%2Fstart_a.jsp"
    );
    cy.get("#discoveryHint").type("bruno.fradiano@vodafone.com");
    cy.get("#submit_button").click();
  });
});
