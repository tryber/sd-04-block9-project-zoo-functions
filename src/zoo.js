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

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const humanSchedule = {};
  if (!dayName || Object.keys(dayName) === 0) {
    const days = Object.keys(data.hours);
    days.forEach(day => {
      if (day === "Monday") {
        humanSchedule.Monday = `CLOSED`;
      } else {
        humanSchedule[day] = `Open from ${data.hours[day].open}am until ${data
          .hours[day].close - 12}pm`;
      }
    });
    return humanSchedule;
  }
  if (dayName === "Monday") {
    humanSchedule.Monday = `CLOSED`;
    return humanSchedule;
  }
  humanSchedule[dayName] = `Open from ${data.hours[dayName].open}am until ${data
    .hours[dayName].close - 12}pm`;
  return humanSchedule;
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
  createEmployee
};
