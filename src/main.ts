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

const englishToMorse = (input: string): string => {
  const upperCaseText = input.toUpperCase();

  const morseCodeArray = upperCaseText.split(" ").map((word) => {
    const wordMorse = word.split("").map((char) => {
      const morseChar = morseCodeDict[char];

      return morseChar;
    });
    console.log(wordMorse);
    return wordMorse.join(" ");
  });

  console.log(morseCodeArray.join(" / "));
  return morseCodeArray.join(" / ");
};

translateButton.addEventListener("click", () => {
  const inputText = input.value;
  const morseCodeOutput = englishToMorse(inputText);
  output.textContent = morseCodeOutput;
});
