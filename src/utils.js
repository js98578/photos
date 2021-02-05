export const divide = (value, divide) => {
  let modular = value % divide;
  if (modular == 0) {
    return value / divide;
  }
  return (value - modular) / divide;
};
