import { Seq } from 'immutable';

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Main function that uses Seq
const processSeq = (input) => {
  // Directly return the mapped value without block statement
  return Seq(input).map(item => capitalizeFirstLetter(item));
};

// Default export of the main function
export default processSeq;
