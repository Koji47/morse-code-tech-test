import { morseCodeDict } from "./_morseCodeDict";

export const englishToMorse = (input: string): string => {
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
