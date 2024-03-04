export const capitalize = (text) => {
  text = text.trim();
  return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
};

export const titleCase = (text) => {
  let words = text.split(" ");

  words = words.map((word) => {
    return capitalize(word);
  });

  return words.join(" ");
};

export const sentenceCase = (text) => {
  let words = capitalize(text).split(" "); // capitalizing the first word
  let capitalizeNext = false;

  words = words.map((word) => {
    if (word !== "" && capitalizeNext) {
      word = capitalize(word);
      capitalizeNext = false;
    }
    if (
      word.charAt(word.length - 1) === "." ||
      word.charAt(word.length - 1) === "?" ||
      word.charAt(word.length - 1) === "!"
    ) {
      capitalizeNext = true;
    }
    return word;
  });

  return words.join(" ");
};
