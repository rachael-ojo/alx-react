import { Seq } from 'immutable';

const printBestStudents = (grades) => {
  // Convert the grades object to a Seq for easier manipulation
  const studentsSeq = Seq(grades);

  // Filter students with scores >= 70
  const bestStudents = studentsSeq.filter(student => student.score >= 70)
    .map(student => ({
      // Capitalize first name and last name
      firstName: capitalizeFirstLetter(student.firstName),
      lastName: capitalizeFirstLetter(student.lastName),
      score: student.score,
    }));

  // Convert back to an object
  const result = bestStudents.toJS();

  // Print the result
  console.log(result);
};

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Example usage
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 65,
    firstName: 'john',
    lastName: 'doe',
  },
  3: {
    score: 70,
    firstName: 'jane',
    lastName: 'smith',
  },
};

printBestStudents(grades);
