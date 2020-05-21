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
// Starting
const data = require("./data");

function animalsByIds(...ids) {
  if (!ids) return [];
  return data.animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, idade) {
  const { residents } = data.animals.find(({ name }) => name === animal);
  return residents.every(({ age }) => age > idade);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const man = data.employees.some(({ managers }) =>
    managers.some(e => e === id)
  );
  return man;
}

function addEmployee(
  id = "",
  firstName = "",
  lastName = "",
  managers = [],
  responsibleFor = []
) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  });
}

function animalCount(species) {
  if (!species) {
    const allAnimals = {};
    data.animals.forEach(
      ({ name, residents }) => (allAnimals[name] = residents.length)
    );
    return allAnimals;
  }
  const { residents } = data.animals.find(({ name }) => name === species);
  return residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const numPeople = Object.keys(entrants);
  return numPeople.reduce(
    (acc, key) => acc + entrants[key] * data.prices[key],
    0
  );
}

function animalMapNoOpt() {
  const allAnimalsLoc = {};
  const locations = [...new Set(data.animals.map(({ location }) => location))];
  locations.forEach(loc => {
    const animals = data.animals
      .filter(({ location }) => location === loc)
      .map(({ name }) => name);
    allAnimalsLoc[loc] = animals;
  });
  return allAnimalsLoc;
}

function animalMapInclude(options) {
  const newMap = animalMapNoOpt();
  const iterableMap = Object.keys(newMap);
  iterableMap.forEach(loc => {
    newMap[loc].forEach((animalType, idx) => {
      const typeNames = data.animals
        .find(({ name }) => animalType === name)
        .residents.filter(({ sex }) => !options.sex || options.sex === sex)
        .map(({ name }) => name);
      if (options.sorted) {
        typeNames.sort();
      }
      newMap[loc][idx] = { [animalType]: typeNames };
    });
  });
  return newMap;
}

function animalMap(options) {
  const newMap = animalMapNoOpt();
  if (!options) return newMap;
  if (options.sex && !options.includeNames) return newMap;
  return animalMapInclude(options);
}

function schedule(dayName) {
  const humanSchedule = {};
  const days = Object.keys(data.hours);
  days.forEach(day => {
    const { open } = data.hours[day];
    const close = data.hours[day].close - 12;
    humanSchedule[day] = `Open from ${open}am until ${close}pm`;
  });
  humanSchedule.Monday = "CLOSED";
  if (!dayName) {
    return humanSchedule;
  }
  return { [dayName]: humanSchedule[dayName] };
}

function oldestFromFirstSpecies(id) {
  const { responsibleFor } = data.employees.find(e => e.id === id);
  const animal = data.animals.find(el => el.id === responsibleFor[0]);
  const maxAge = animal.residents.reduce(
    (acc, cur) => Math.max(acc, cur.age),
    0
  );
  return Object.values(animal.residents.find(ind => ind.age === maxAge));
}

function increasePrices(percentage) {
  const newPrices = Object.values(data.prices).map(
    e => Math.round(e * (1 + percentage / 100) * 100) / 100
  );
  Object.keys(data.prices).forEach(
    (key, ind) => (data.prices[key] = newPrices[ind])
  );
  return data.prices;
}

function employeeCoverage(idOrName) {
  const employeesList = {};
  data.employees.forEach(employee => {
    const name = `${employee.firstName} ${employee.lastName}`;
    const animals = employee.responsibleFor.map(
      e => data.animals.find(f => f.id === e).name
    );
    employeesList[name] = animals;
  });
  if (!idOrName) {
    return employeesList;
  }
  const { firstName, lastName } = data.employees.find(
    e =>
      e.firstName === idOrName || e.lastName === idOrName || e.id === idOrName
  );
  const name = `${firstName} ${lastName}`;
  return { [name]: employeesList[name] };
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
  createEmployee
};
