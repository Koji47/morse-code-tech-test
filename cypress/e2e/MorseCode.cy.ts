
describe("Morse Code Translator", () => {

  beforeEach(() => {
    cy.visit("https://koji47.github.io/morse-code-tech-test/");
  });
  
  it("Translates English to Morse code", () => {
    cy.get("input").type("Hello World");
    cy.get("button").click();
    cy.get("#output").should("have.text", ".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
  });

  it("Translates English to Morse code no matter the letter casing", () => {
    cy.get("input").type("HeLLo woRLD");
    cy.get("button").click();
    cy.get("#output").should("have.text", ".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
  });


  it("Translates English to Morse code and handle multiple words", () => {
    cy.get("input").type("Hello world my name is chu");
    cy.get("button").click();
    cy.get("#output").should("have.text", ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. / -- -.-- / -. .- -- . / .. ... / -.-. .... ..-")
  });

});
