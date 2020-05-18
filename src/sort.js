const sortArray = (incommingArray) =>
  incommingArray.sort((a, b) =>  ((a.age > b.age) ? -1 : 1))[0];

module.exports = { sortArray }