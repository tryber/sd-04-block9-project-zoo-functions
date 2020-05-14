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
function generateGenericMap(location) {
  return data.animals.filter(elementAnimal => elementAnimal.location === location)
  .map(filteredAnimal => filteredAnimal.name);
}
const genericMap = {
  NE: generateGenericMap('NE'),
  NW: generateGenericMap('NW'),
  SE: generateGenericMap('SE'),
  SW: generateGenericMap('SW'),
};
function generateNamesMap(location) {
  return genericMap[location].map(elementAnimalName => ({
    [elementAnimalName]: data.animals
    .find(elementAnimal => elementAnimalName === elementAnimal.name)
    .residents.map(elementResident => elementResident.name),
  }));
}
function sortArrayOfTheAnimal(animal) {
  const animalName = Object.keys(animal)[0];
  const orderedNames = animal[animalName].sort();
  return { [animalName]: orderedNames };
}
function generateSortedNamesMap(location) {
  return generateNamesMap(location).map(elementAnimal =>
    sortArrayOfTheAnimal(elementAnimal),
  );
}
function generateNamesAndSexMap(location, sex) {
  return generateNamesMap(location).map(elementAnimal => {
    const animalName = Object.keys(elementAnimal)[0];
    const info = data.animals.find(animal => animal.name === animalName);
    const filtered = info.residents.filter(resident => resident.sex === sex);
    return { [animalName]: filtered.map(element => element.name) };
  });
}
function generateSortedNamesAndSexMap(location) {
  return generateNamesAndSexMap(location).map(elementAnimal =>
    sortArrayOfTheAnimal(elementAnimal),
  );
}
function generateFinalResponse(opt) {
  const response = {};
  const includeNames = opt.includeNames;
  const sorted = opt.sorted;
  const sex = opt.sex;
  const locations = ['NE', 'NW', 'SE', 'SW'];
  for (let i = 0; i < locations.length; i += 1) {
    if (includeNames) {
      if (sorted) {
        if (sex) {
          response[locations[i]] = generateSortedNamesAndSexMap(locations[i]);
        } else {
          response[locations[i]] = generateSortedNamesMap(locations[i]);
        }
      } else {
        if (sex) {
          response[locations[i]] = generateNamesAndSexMap(locations[i], sex);
        } else {
          response[locations[i]] = generateNamesMap(locations[i]);
        }
      }
    }
  }
  return response;
}
function animalMap(options) {
  let response = genericMap;
  if (options) {
    response = generateFinalResponse(options);
  }
  if (!Object.keys(response).length) {
    response = genericMap;
  }
  return response;
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
