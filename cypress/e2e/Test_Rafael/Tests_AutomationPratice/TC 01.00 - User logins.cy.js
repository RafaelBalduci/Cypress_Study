import * as login from "./LoginPage";
import * as product from "./ProductsPage";

describe("First automation test", () => {
  it("Login standard user", () => {
    let timeNow = login.performanceStart();
    login.access();
    login.fillUserStandard();
    login.fillPass();
    login.login();
    login.performanceEnd(timeNow);
    product.checkIMGCorrect();
  });
  it("Login locked user", () => {
    login.access();
    login.fillUserLock();
    login.fillPass();
    login.login();
    login.erroUserLock();
  });
  it("Login problem user", () => {
    login.access();
    login.fillUserProblem();
    login.fillPass();
    login.login();
    product.checkIMGWrong();
  });
  it("Login glicth user", () => {
    let timeNow = login.performanceStart();
    login.access();
    login.fillUserGlicth();
    login.fillPass();
    login.login();
    login.performanceEnd(timeNow);
  });
});
