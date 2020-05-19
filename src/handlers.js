const data = require('./data');

const sortArray = incommingArray =>
  incommingArray.sort((a, b) => ((a.age > b.age) ? -1 : 1))[0];

const getAnimals = animalsIds => animalsIds.map(id =>
  data.animals.find(animal => animal.id === id).name);

const openOrClose = ({ open, close }) => {
  if (open === 0 && close === 0) return 'CLOSED';
  return `Open from ${open}am until ${close - 12}pm`;
};

module.exports = { sortArray, getAnimals, openOrClose };
