describe("User login", () => {
  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("helloexample.com")
      .should("have.value", "helloexample.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Invalid email format");
  })
})