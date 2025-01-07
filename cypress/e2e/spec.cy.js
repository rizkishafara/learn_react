describe("User Access to Dashboard", () => {
  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5173");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202315431@mhs.dinus.ac.id")
      .should("have.value", "111202315431@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Rizki").should("be.visible");

    //cek apakah nama user tetap muncul setelah reload
    cy.reload();
    cy.get("div").contains("Rizki").should("be.visible");
  });
});
