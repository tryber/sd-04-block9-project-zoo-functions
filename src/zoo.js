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
  if (!ids) return [];
  return data.animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, age) {
  const filteredAnimals = data.animals.find(({ name }) => name === animal);
  return filteredAnimals.residents.every(({ age: trueAge }) => trueAge >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return data.animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  const entries = Object.entries(data.prices);
  if (!entrants || !Object.keys(entrants).length) return 0;
  return Object.entries(entrants).reduce((acc, [age, quant], index) => {
    const price = entries.find(([category]) => category === age);
    acc += quant * price[1];
    return acc;
  }, 0);
}

function animalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    return data.animals.reduce((acc, { name, location, residents }) => {
      let residentsNames;
      if (!acc[location]) acc[location] = [];
      if (sex) {
        const residentsBySex = residents.filter(resident => resident.sex === sex);
        residentsNames = residentsBySex.map(resident => resident.name);
      } else {
        residentsNames = residents.map(resident => resident.name);
      }
      if (sorted) residentsNames.sort();
      acc[location].push({ [name]: residentsNames });
      return acc;
    }, {});
  }
  return data.animals.reduce((acc, { name, location }) => {
    if (!acc[location]) acc[location] = [];
    acc[location].push(name);
    return acc;
  }, {});
}

function schedule(dayName) {
  const hours = Object.entries(data.hours);

  if (dayName) {
    if (dayName === 'Monday') return { [dayName]: 'CLOSED' };
    const [day, { open, close }] = hours.find(([weekday]) => weekday === dayName);
    return { [day]: `Open from ${open}am until ${close - 12}pm` };
  }

  return hours.reduce((acc, [day, { open, close }], index) => {
    if (day === 'Monday') acc[day] = 'CLOSED';
    else acc[day] = `Open from ${open}am until ${close - 12}pm`;
    return acc;
  }, {});
}

function oldestFromFirstSpecies(id) {
  const employeeAnimalId =
    data.employees.find(employee => employee.id === id).responsibleFor[0];
  const employeeResidents =
    data.animals.find(animal => animal.id === employeeAnimalId).residents;
  let oldest = 0;
  return employeeResidents.reduce((acc, { name, sex, age }) => {
    if (age > oldest) {
      oldest = age;
      acc = [name, sex, age];
    }
    return acc;
  }, []);
}

function increasePrices(percentage) {
  const keys = Object.keys(data.prices);

  keys.forEach((key) => {
    const currentPrice = data.prices[key];
    const increment = 100 + percentage;
    const newPrice =
      Math.ceil(currentPrice * increment) / 100;
    data.prices[key] = newPrice;
  });
}

/*
Se eu usasse esse método, os nomes iriam ficar na ordem do 'animals', e não 'responsibleFor'
const getAnimals = data.animals.filter(animal => responsibleFor.includes(animal.id))
const getNames = getAnimals.map(animal => animal.name);
*/
function employeeCoverage(idOrName) {
  const getEmployee =
    data.employees.find(({ firstName, lastName, id }) =>
      firstName === idOrName || lastName === idOrName || id === idOrName);

  const getAnimals = responsible =>
    responsible.reduce((acc, id) => {
      if (!acc) acc = [];
      const getNames = data.animals.find(animal => animal.id === id).name;
      acc.push(getNames);
      return acc;
    }, []);

  if (idOrName) {
    const { firstName, lastName, responsibleFor } = getEmployee;
    return { [`${firstName} ${lastName}`]: getAnimals(responsibleFor) };
  }

  return data.employees.reduce((acc, { firstName, lastName, responsibleFor }) => {
    acc[`${firstName} ${lastName}`] = getAnimals(responsibleFor);
    return acc;
  }, {});
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
