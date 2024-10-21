import { Seq } from 'immutable';

// Define the function first to avoid "use before define" errors
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Main function that uses Seq
const processSeq = (input) => {
  // Use parentheses around the arrow function argument
  return Seq(input).map((item) => capitalizeFirstLetter(item));
};

// Use default export as the file has a single export
export default processSeq;
