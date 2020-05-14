const data = require('./data');

function animalsByIds(...ids) {
  if (!ids) return [];

  const animalsResult = ids.map((id) => {
    return data.animals.find((animal) => animal.id === id);
  });

  return animalsResult;
}

function animalsOlderThan(animal, age) {
  const result = data.animals
    .filter((species) => species.name === animal)
    .map((selectedSpecies) => selectedSpecies.residents)
    .find((residents) => residents[0].age > age);

  return !!result;
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
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
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
