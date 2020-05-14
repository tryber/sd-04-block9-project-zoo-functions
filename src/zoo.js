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

const createAnimalCountObj = () =>
  data.animals.reduce((obj, animal) => {
    obj[animal.name] = animal.residents.length;
    return obj;
  }, {});

const animalCount = (species) => {
  if (species === undefined) return createAnimalCountObj();
  return data.animals.find(({ name }) => name === species).residents.length;
};

const entryCalculator = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce(
    (price, person) => price + entrants[person] * data.prices[person],
    0
  );
};

const createAnimalMapObj = () =>
  data.animals.reduce((obj, { name, location }) => {
    obj[location] === undefined
      ? (obj[location] = [name])
      : obj[location].push(name);
    return obj;
  }, {});

const animalMapIncludeNames = (animalMapObj, animalSex) => {
  let names = [];
  Object.keys(animalMapObj).forEach((location) => {
    animalMapObj[location].forEach((animName, index) => {
      const animObj = data.animals.find(({ name }) => name === animName);
      if (animalSex === undefined) {
        names = animObj.residents.map(({ name }) => name);
      } else {
        names = animObj.residents
          .filter(({ sex }) => sex === animalSex)
          .map(({ name }) => name);
      }
      animalMapObj[location][index] = { [animName]: names };
    });
  });
  return animalMapObj;
};

function animalMap(options) {
  let animalMapObj = createAnimalMapObj();
  if (options === undefined) return animalMapObj;
  const { includeNames, sex, sorted } = options;
  if (includeNames) animalMapObj = animalMapIncludeNames(animalMapObj, sex);
  if (sorted) {
    Object.keys(animalMapObj).forEach((location) => {
      animalMapObj[location].forEach((animNamesObj, index) => {
        animNamesObj[Object.keys(animNamesObj)[0]].sort();
      });
    });
  }
  return animalMapObj;
}

function schedule(dayName) {
  const scheduleObj = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return scheduleObj;
  return {[dayName]: scheduleObj[dayName] }
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
