import { englishToMorse } from "./_morseToEnglish";

export const input = document.querySelector<HTMLInputElement>("input");
export const translateButton = document.querySelector<HTMLButtonElement>("button");
export const output = document.querySelector<HTMLDivElement>("#output");

if (!input || !translateButton) {
  throw new Error("Error input selector");
}

if (!output) {
  throw new Error("Error output selector");
}

translateButton.addEventListener("click", () => {
  const inputText = input.value;
  const morseCodeOutput = englishToMorse(inputText);
  output.textContent = morseCodeOutput;
});
