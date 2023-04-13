describe("login", () => {
    it("lets user login and access their profile", () => {
        cy.visit("http://127.0.0.1:5500/index.html");
        cy.wait(2000);
        cy.get("button.btn.btn-outline-success")
          .should("be.visible")
          .contains("login")
          .click();
        cy.wait(2000);
        cy.get("input[name='email']").type("ar-workflow-test@stud.noroff.no");
        cy.get("input[name='password']").type("Abcd1234");
        cy.get("button[type=submit]")
          .contains("login")
          .click();
      });
});
