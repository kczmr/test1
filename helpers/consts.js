export const firstLetterToUpper = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const maxId = (arr) => {
  return (
    Math.max.apply(
      null,
      arr.map((item) => item.id),
    ) + 1
  );
};
