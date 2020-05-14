const data = require('./data');

function animalsByIds(...ids) {
  const animalsWithId = data.animals.filter(elementAnimal =>
    ids.find(id => id === elementAnimal.id),
  );
  return animalsWithId;
}

function animalsOlderThan(animal, age) {
  const areAllResidentsOlderThan = data.animals
    .find(elementAnimal => elementAnimal.name === animal)
    .residents.every(resident => resident.age >= age);

  return areAllResidentsOlderThan;
}

function employeeByName(employeeName) {
  const employeeWithName = data.employees.find(
    elementEmployee =>
      elementEmployee.lastName === employeeName ||
      elementEmployee.firstName === employeeName,
  );
  if (!employeeWithName) return {};
  return employeeWithName;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  const allManagers = [];
  data.employees.forEach(elementEmployee =>
    elementEmployee.managers.forEach(elementManager => {
      if (
        !allManagers.some(managerInArray => managerInArray === elementManager)
      ) {
        allManagers.push(elementManager);
      }
    }),
  );
  const isThisIdManager = allManagers.some(
    managerInArray => managerInArray === id,
  );
  return isThisIdManager;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  const employeeObject = createEmployee(personalInfo, associatedWith);
  data.employees.push(employeeObject);
}

function animalCount(species) {
  const allAnimalsAndQuantity = {};
  data.animals.forEach(
    elementAnimal =>
      (allAnimalsAndQuantity[elementAnimal.name] =
        elementAnimal.residents.length),
  );
  if (species) {
    return allAnimalsAndQuantity[species];
  }
  return allAnimalsAndQuantity;
}

function entryCalculator(entrants) {
  let total = 0;
  if (!entrants) return total;
  if (!Object.keys(entrants).length) return total;
  total += entrants.Adult * data.prices.Adult;
  total += entrants.Child * data.prices.Child;
  total += entrants.Senior * data.prices.Senior;

  return total;
}

function generateGenericAnimalMap() {
  const responseObjectMap = data.animals.reduce((map, { name, location }) => {
    map[location].push(name);
    return map;
  }, { NE: [], NW: [], SE: [], SW: [] });

  return responseObjectMap;
}

function generateNamesForTheAnimalMap(genericMap, options) {
  Object.keys(genericMap).forEach(location => {
    genericMap[location].forEach((animalName, index) => {
      const names = data.animals.find(animal => animalName === animal.name)
      .residents.filter(resident => !options.sex || options.sex === resident.sex)
      .map(filteredResident => filteredResident.name);
      if (options.sorted) {
        names.sort();
      }
      genericMap[location][index] = { [animalName]: names };
    });
  });
  return genericMap;
}

function animalMap(options) {
  const genericMap = generateGenericAnimalMap();
  if (!options) return genericMap;
  if (options.sex && !options.includeNames) return genericMap;
  return generateNamesForTheAnimalMap(genericMap, options);
}

function schedule(dayName) {
  //  foda-se, tinha feito da forma certa, CodeClimate reclamou, vou de lifehacks
  const genericSchedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return genericSchedule;
  return { [dayName]: genericSchedule[dayName] };
}

function oldestFromFirstSpecies(id) {
  const responsibleEmployee = data.employees.find(
    elementEmployee => elementEmployee.id === id,
  );
  const idFirstAnimalResponsibility = responsibleEmployee.responsibleFor[0];
  const animalResponsible = data.animals.find(
    elementAnimal => elementAnimal.id === idFirstAnimalResponsibility,
  );
  const oldestResidentAge = animalResponsible.residents.reduce(
    (oldest, elementAnimal) => {
      if (elementAnimal.age > oldest) {
        return elementAnimal.age;
      }
      return oldest;
    }, 0,
  );
  const oldestResident = animalResponsible.residents.find(
    elementAnimal => elementAnimal.age === oldestResidentAge,
  );
  return Object.values(oldestResident);
}

function increasePrices(percentage) {
  data.prices.Adult *= (1 + (percentage / 100));
  data.prices.Senior *= (1 + (percentage / 100));
  data.prices.Child *= (1 + (percentage / 100));

  function formatValue(numberAsString) {
    let returnedNumber = Number(numberAsString);
    if (numberAsString.endsWith('5')) {
      returnedNumber += 0.001;
      return returnedNumber.toPrecision(4);
    }
    return returnedNumber.toPrecision(4);
  }

  data.prices.Adult = formatValue(data.prices.Adult.toString());
  data.prices.Senior = formatValue(data.prices.Senior.toString());
  data.prices.Child = formatValue(data.prices.Child.toString());
}

function makeResponseObjectForEmployeeCoverage(employee) {
  const key = `${employee.firstName} ${employee.lastName}`;
  const value = employee.responsibleFor.map(animalId =>
    data.animals.find(elementAnimal => animalId === elementAnimal.id).name,
  );
  return { key, value };
}
function employeeCoverage(idOrName) {
  if (!idOrName) {
    const responseObj = {};
    data.employees.forEach(elementEmployee => {
      const response = makeResponseObjectForEmployeeCoverage(elementEmployee);
      responseObj[response.key] = response.value;
    });
    return responseObj;
  } else if (idOrName.length === 36) {
    const employeeSearched = data.employees.find(
      elementEmployee => elementEmployee.id === idOrName,
    );
    const response = makeResponseObjectForEmployeeCoverage(employeeSearched);
    return { [response.key]: response.value };
  }
  const employeeSearched = data.employees.find(
    elementEmployee =>
      elementEmployee.firstName === idOrName ||
      elementEmployee.lastName === idOrName,
  );
  const response = makeResponseObjectForEmployeeCoverage(employeeSearched);
  return { [response.key]: response.value };
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
