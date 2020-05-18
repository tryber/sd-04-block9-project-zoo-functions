const data = require('./data');

const sortArray = incommingArray =>
  incommingArray.sort((a, b) => ((a.age > b.age) ? -1 : 1))[0];

const getAnimals = (animalsIds) => animalsIds.map(id =>
  data.animals.find(animal => animal.id === id).name);

module.exports = { sortArray, getAnimals };
