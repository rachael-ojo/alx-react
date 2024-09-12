import { Seq } from 'immutable';

export function printBestStudents(grades) {
  const bestStudents = Seq(grades)
    .filter(student => student.score >= 70)
    .map(student => ({
      firstName: capitalizeFirstLetter(student.firstName),
      lastName: capitalizeFirstLetter(student.lastName),
    }));

  bestStudents.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}`);
  });
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
