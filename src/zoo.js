/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const animalsByIds = (...ids) =>
  ids.map((id) => data.animals.find((animal) => animal.id === id));

const animalsOlderThan = (animal, age) =>
  data.animals
    .find((allResidents) => allResidents.name === animal)
    .residents.every((anim) => anim.age > age);

const employeeByName = (employeeName) =>
  employeeName === undefined
    ? {}
    : data.employees.find(
        ({ firstName, lastName }) =>
          firstName === employeeName || lastName === employeeName
      );

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = (id) =>
  data.employees.some(({ managers }) => managers.some((i) => i === id));

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = []
) => data.employees.push({ id, firstName, lastName, managers, responsibleFor });

const createAnimalCountObj = () => {
  const animalCountObj = {};
  for (let i = 0; i < data.animals.length; i++) {
    animalCountObj[data.animals[i].name] = data.animals[i].residents.length;
  }
  return animalCountObj;
};

const animalCount = (species) => {
  if (species === undefined) return createAnimalCountObj();
  return data.animals.find((animal) => animal.name === species).residents
    .length;
};

const entryCalculator = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce(
    (price, person) => price + entrants[person] * data.prices[person],
    0
  );
};

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
