import { Seq } from 'immutable';

const myFunction = (arg) => {
  // Use parentheses around arrow function arguments
  const seq = Seq(arg);
  // Define variables and functions before using them
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  return seq.map(capitalizeFirstLetter);
};

export default myFunction;
