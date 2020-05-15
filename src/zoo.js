/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/
// starting!

const data = require('./data');

const animalsByIds = (...ids) => {
  if (!ids) return [];
  return data.animals.filter(animal => ids.includes(animal.id));
};

const animalsOlderThan = (speciesName, age) =>
  data.animals
    .find(species => species.name === speciesName)
    .residents.every(animal => animal.age >= age);

const employeeByName = employeeName =>
  data.employees
    .filter(obj => obj.firstName === employeeName || obj.lastName === employeeName)
    .reduce((acc, employeeObj) => (acc = employeeObj), {});

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id =>
  data.employees.some(manager => manager.managers.some(eachManager => eachManager === id));

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) =>
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });

const animalCount = (species) => {
  if (!species) {
    return data.animals.reduce((acc, animal) => {
      acc[animal.name] = animal.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find(animal => animal.name === species).residents.length;
};

const entryCalculator = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = data.prices;
  const { Adult, Child, Senior } = entrants;
  return (adultPrice * Adult) + (childPrice * Child) + (seniorPrice * Senior);
};

const animalMapDefault = region => data.animals
    .filter(animal => animal.location === region)
    .map(animal2 => animal2.name);

const animalMapObject = (
  NE = animalMapDefault('NE'),
  NW = animalMapDefault('NW'),
  SE = animalMapDefault('SE'),
  SW = animalMapDefault('SW'),
) => ({
  NE,
  NW,
  SE,
  SW,
});

const includeNamesAndSort = (region, sort) => {
  const chosenAnimals = data.animals.filter(
    animal => animal.location === region);
  let object = {};
  const arr = [];
  chosenAnimals.forEach((chosen) => {
    object = {};
    if (!sort) 
    { object[chosen.name] = chosen.residents.map(element => element.name);
     }  else {(object[chosen.name] = chosen.residents.map(element => element.name)).sort();}
    return arr.push(object);
  });
  return arr;
};

const filterGender = (region, sex) => {
  const chosenAnimals = data.animals.filter(
    animal => animal.location === region);
  let object = {};
  const arr = [];
  chosenAnimals.forEach((chosen) => {
    object = {};
    object[chosen.name] = chosen.residents.reduce((acc, element) => {
      if (element.sex === sex) acc .push(element.name);
      return acc
    },[])
    return arr.push(object);
  });
  return arr;
  
};

const animalMap = (options) => {
  if (!options) return animalMapObject();
  const { includeNames, sorted, sex } = options;
  if (includeNames && sorted) 
  { return animalMapObject(
    includeNamesAndSort('NE', 'sort'), includeNamesAndSort('NW', 'sort'),
    includeNamesAndSort('SE', 'sort'), includeNamesAndSort('SW', 'sort'));
  }
  if (includeNames && sex) 
  { return animalMapObject(
    filterGender('NE', sex), filterGender('NW', sex),
    filterGender('SE', sex), filterGender('SW', sex));
  }
  if (includeNames)
  { return animalMapObject(
    includeNamesAndSort('NE'), includeNamesAndSort('NW'),
    includeNamesAndSort('SE'), includeNamesAndSort('SW'));
  } return animalMapObject();
};

// console.log(animalMap({ includeNames: true, sex: 'female' }));

const schedule = (dayName) => {};

const oldestFromFirstSpecies = (id) => {};

const increasePrices = (percentage) => {};

const employeeCoverage = (idOrName) => {};

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
