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

const animalMapIncludeNames = (animalSex) => {
  // return object

    };
};

function animalMap(options) {
  const animalMapObj = createAnimalMapObj();
  if (options === undefined) return animalMapObj;
  const { includeNames, sex, sorted } = options;
  if (includeNames) {
        
      })
    })
    return animalMapIncludeNames('lions');
  }

  return animalMapObj;
}

console.log(animalMap({ includeNames: true }));

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
