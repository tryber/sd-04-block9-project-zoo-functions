const data = require('./data');

function animalsByIds(...ids) {
  if (!ids) return [];

  const animalsResult = ids.map((id) => {
    return data.animals.find((animal) => animal.id === id);
  });

  return animalsResult;
}

function animalsOlderThan(specie, age) {
  const result = data.animals
    .find((selectedSpecie) => selectedSpecie.name === specie)
    .residents.find((animal) => animal.age < age);

  return !(result);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const selectedEmployee = data.employees
    .find((employee) => (
      employee.firstName.includes(employeeName) || employee.lastName.includes(employeeName)
    ));

  return selectedEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const employee = Object.assign(personalInfo, associatedWith);

  return employee;
}

function isManager(id) {
  const manager = data.employees
    .map((employee) => {
      const [employeeManagers] = employee.managers;
      return employeeManagers;
    })
    .find((managersId) => managersId === id);

  return !!manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push(
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,

    },
  );
}

function animalCount(species) {
  if (!species) {
    const result = {};
    data.animals.map((animal) => {
      const count = animal.residents.reduce((previous) => previous + 1, 0);
      result[animal.name] = count;

      return true;
    });
    return result;
  }

  const [residents] = data.animals.filter((animal) => animal.name === species)
    .map((animal) => animal.residents);
  const result = residents.reduce((previous) => previous + 1, 0);
  return result;
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) return 0;
}

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
