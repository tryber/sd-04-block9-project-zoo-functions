const data = require('./data');

const animalsByIds = (...ids) => {
  if (!ids) return [];

  return ids.map((id) => data.animals.find((animal) => animal.id === id));
};

const animalsOlderThan = (specie, age) => data.animals
  .find((selectedSpecie) => selectedSpecie.name === specie)
  .residents.every((animal) => animal.age > age);

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

const animalCount = (species) => {
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
};

function entryCalculator(entrants = {}) {
  if (Object.entries(entrants).length === 0) return 0;

  const totalToPay = Object.values(entrants)
    .reduce((total, qnt, index) => total + qnt * data.prices[Object.keys(entrants)[index]], 0);

  return totalToPay;
}

const filterResidents = (residents, sex, includeNames) => {
  if (sex) {
    return residents.filter((resident) => resident.sex === sex)
      .map((resident) => resident.name);
  }
  return residents.map((resident) => resident.name);
};

const animalMap = (options = {}) => data.animals
  .reduce((result, { name, location, residents }) => {
    if (!result[location]) result[location] = [];

    if (Object.keys(options).length === 0) {
      result[location].push(name);
    } else {
      result[location].push(
        { [name]: filterResidents(residents, options.sex, options.includeNames) },
      );
    }
    if (options.sorted === true) {
      let specie = result[location].find((animal) => Object.keys(animal)[0] === name);
      specie = specie[name].sort();
    }
    return result;
  }, {});

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
