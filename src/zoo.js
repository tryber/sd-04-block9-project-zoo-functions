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
) => ({ NE, NW, SE, SW });

const nameSortGender = (region, sort, sex) => {
  const chosenAnimals = data.animals.filter(
    animal => animal.location === region);
  let object = {};
  const arr = [];
  chosenAnimals.forEach((chosen) => {
    object = {};
    if (sex) {
      object[chosen.name] = chosen.residents.reduce((acc, element) => {
        if (element.sex === sex) acc.push(element.name);
        return acc;
      }, []);
    }
    if (sort) {
      (object[chosen.name] = chosen.residents.map(element => element.name)).sort();
    }
    if (!sex && !sort) {
      object[chosen.name] = chosen.residents.map(element => element.name);
    }
    return arr.push(object);
  });
  return arr;
};

const animalMapCases = (options) => {
  const { includeNames, sorted, sex } = options;
  if (includeNames && sorted) {
    return animalMapObject(
    nameSortGender('NE', 'sort'), nameSortGender('NW', 'sort'),
    nameSortGender('SE', 'sort'), nameSortGender('SW', 'sort'));
  }
  if (includeNames && sex) {
    return animalMapObject(
      nameSortGender('NE', undefined, sex), nameSortGender('NW', undefined, sex),
      nameSortGender('SE', undefined, sex), nameSortGender('SW', undefined, sex));
  }
  if (includeNames) {
    return animalMapObject(
    nameSortGender('NE'), nameSortGender('NW'),
    nameSortGender('SE'), nameSortGender('SW'));
  } return animalMapObject();
};

const animalMap = (options) => {
  if (!options) return animalMapObject();
  return animalMapCases(options);
};

const schedule = (dayName) => {
  const arr = Object.entries(data.hours);
  const newObj = arr.reduce((acc, obj) => {
  if (obj[1].open !== 0) {
    acc[obj[0]] = `Open from ${obj[1].open}am until ${obj[1].close - 12}pm`;
  } else {
    acc[obj[0]] = 'CLOSED';
  }
  return acc;
}, {});
  if (dayName) {
    return { [dayName]: newObj[dayName] };
  } return newObj;
};

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
