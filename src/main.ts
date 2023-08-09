import "./style.css";
import { morseCodeDict } from "./_morseCodeDict";

export const input = document.querySelector<HTMLInputElement>("input");
export const translateButton =
  document.querySelector<HTMLButtonElement>("button");
export const output = document.querySelector<HTMLDivElement>("#output");

if (!input || !translateButton) {
  throw new Error("Error input selector");
}

if (!output) {
  throw new Error("Error output selector");
}

const englishToMorse = (input: string) => {
  const upperCaseText = input.toUpperCase();
  let morseCode = "";

  upperCaseText.split("").forEach((letter) => {
    const morseChar = morseCodeDict[letter];
    morseCode += morseChar + " ";
  });

  return morseCode;
};

translateButton.addEventListener("click", () => {
  const inputText = input.value;
  const morseCodeOutput = englishToMorse(inputText);
  output.textContent = morseCodeOutput;
  console.log("working button");
});
