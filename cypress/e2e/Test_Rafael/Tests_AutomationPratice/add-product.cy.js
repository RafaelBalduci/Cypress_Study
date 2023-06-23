import * as login from "./login-page";
import * as product from "./products-page";

describe("First automation test", () => {
  it("Add one product", () => {
    let count = 0;
    login.singIN();
    product.addProduct1();
  });
  it("Add multiple products", () => {
    login.singIN();
    product.addProductMulti();
  });
  it("Add all products", () => {
    login.singIN();
    product.addProductAll();
  });
});
