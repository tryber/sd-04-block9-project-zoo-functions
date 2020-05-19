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

function animalsByIds(...ids) {
  // seu código aqui
  const [r, b] = ids;
  const iden = data.animals.filter(value => value.id === r || value.id === b);

  return iden;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.animals.find(index => index.name === animal);
  return animals.residents.every(i => i.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  } const name = data.employees.filter(i => i.firstName === employeeName ||
    i.lastName === employeeName);
  return name[0];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  const identification = data.employees.some(i => i.managers[0] === id);
  return identification;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  if (managers === undefined) {
    managers = [];
    responsibleFor = [];
    const dt = { id, firstName, lastName, managers, responsibleFor };
    data.employees.push(dt);
    return dt;
  }
  const dat = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(dat);
  return dat;
}

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    return data.animals.reduce((acc, element) => {
      acc[element.name] = element.residents.length;
      return acc;
    }, {});
  }

  species = data.animals.filter(i => i.name === species);
  return (species[0].residents.length);
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const aPrice = data.prices.Adult;
  const cPrice = data.prices.Child;
  const sPrice = data.prices.Senior;

  const total = (entrants.Adult * aPrice) + (entrants.Child * cPrice) + (entrants.Senior * sPrice);
  return total;
}

function animalMap(options) {
  // seu código aqui
  /* if (options === undefined) {
    const NE = data.animals.filter(i => i.location === 'NE').map(indice => indice.name);
    const NW = data.animals.filter(i => i.location === 'NW').map(indice => indice.name);
    const SE = data.animals.filter(i => i.location === 'SE').map(indice => indice.name);
    const SW = data.animals.filter(i => i.location === 'SW').map(indice => indice.name);

    options = {
      NE: NE,
      NW: NW,
      SE: SE,
      SW: SW
    };

    return options;
  };*/
}

function schedule(dayName) {
  // seu código aqui
  /* if (dayName === undefined) {
    dayName = data.hours;
    return dayName;
    };*/
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = id;
  let animal = data.employees.find(i => i.id === employee);
  animal = animal.responsibleFor[0];

  const carac = data.animals.find(i => i.id === animal);
  const ordem = carac.residents.sort((a1, a2) => a2.age - a1.age);
  const name = ordem[0].name;
  const sex = ordem[0].sex;
  const age = ordem[0].age;

  return [name, sex, age];
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
