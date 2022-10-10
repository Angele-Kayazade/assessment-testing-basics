/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  let resultArray = []
  let higherScores = []
  let lowerScores = []

  for (let i = 0; i<students.length; i++) {
    (students[i].score <= score) ? lowerScores.push(students[i]) : higherScores.push(students[i]);
  }

  resultArray = [lowerScores,higherScores];
  return resultArray;
}

module.exports = partitionStudentsByScore;
