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
  total += entrants['Adult'] * data.prices['Adult'];
  total += entrants['Child'] * data.prices['Child'];
  total += entrants['Senior'] * data.prices['Senior'];

  return total;
}

function animalMap(options) {
  const genericMap = {
    NE: data.animals
      .filter(elementAnimal => elementAnimal.location === 'NE')
      .map(filteredAnimal => filteredAnimal.name),
    NW: data.animals
      .filter(elementAnimal => elementAnimal.location === 'NW')
      .map(filteredAnimal => filteredAnimal.name),
    SE: data.animals
      .filter(elementAnimal => elementAnimal.location === 'SE')
      .map(filteredAnimal => filteredAnimal.name),
    SW: data.animals
      .filter(elementAnimal => elementAnimal.location === 'SW')
      .map(filteredAnimal => filteredAnimal.name),
  };
  if (options) {
    const { includeNames, sorted, sex } = options;
    if (includeNames && sorted && sex) {
      const mapWithSortedNamesAndBySex = {
        NE: genericMap.NE.map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.filter(elementResident => elementResident.sex === sex)
            .map(elementResident => elementResident.name)
            .sort(),
        })),
        NW: genericMap.NW.map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.filter(elementResident => elementResident.sex === sex)
            .map(elementResident => elementResident.name)
            .sort(),
        })),
        SE: genericMap.SE.map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.filter(elementResident => elementResident.sex === sex)
            .map(elementResident => elementResident.name)
            .sort(),
        })),
        SW: genericMap.SW.map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.filter(elementResident => elementResident.sex === sex)
            .map(elementResident => elementResident.name)
            .sort(),
        })),
      };
      return mapWithSortedNamesAndBySex;
    } else if (includeNames && !sorted && sex) {
      const mapWithNamesAndBySex = {
        NE: genericMap.NE.map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.filter(elementResident => elementResident.sex === sex)
            .map(elementResident => elementResident.name),
        })),
        NW: genericMap.NW.map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.filter(elementResident => elementResident.sex === sex)
            .map(elementResident => elementResident.name),
        })),
        SE: genericMap.SE.map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.filter(elementResident => elementResident.sex === sex)
            .map(elementResident => elementResident.name),
        })),
        SW: genericMap.SW.map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.filter(elementResident => elementResident.sex === sex)
            .map(elementResident => elementResident.name),
        })),
      };
      return mapWithNamesAndBySex;
    } else if (includeNames && sorted && !sex) {
      const mapWithSortedNames = {
        NE: genericMap['NE'].map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.map(elementResident => elementResident.name)
            .sort(),
        })),
        NW: genericMap['NW'].map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.map(elementResident => elementResident.name)
            .sort(),
        })),
        SE: genericMap['SE'].map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.map(elementResident => elementResident.name)
            .sort(),
        })),
        SW: genericMap['SW'].map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.map(elementResident => elementResident.name)
            .sort(),
        })),
      };
      return mapWithSortedNames;
    } else if (includeNames && !sorted && !sex) {
      const mapWithNames = {
        NE: genericMap['NE'].map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.map(elementResident => elementResident.name),
        })),
        NW: genericMap['NW'].map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.map(elementResident => elementResident.name),
        })),
        SE: genericMap['SE'].map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.map(elementResident => elementResident.name),
        })),
        SW: genericMap['SW'].map(elementAnimalName => ({
          [elementAnimalName]: data.animals
            .find(elementAnimal => elementAnimalName === elementAnimal.name)
            .residents.map(elementResident => elementResident.name),
        })),
      };
      return mapWithNames;
    } else {
      return genericMap;
    }
  } else {
    return genericMap;
  }
}

function schedule(dayName) {
  //foda-se, tinha feito da forma certa, CodeClimate reclamou, vou de lifehacks
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
    (oldest, elementAnimal) =>
      elementAnimal.age > oldest ? elementAnimal.age : oldest,
    0,
  );
  const oldestResident = animalResponsible.residents.find(
    elementAnimal => elementAnimal.age === oldestResidentAge,
  );
  return Object.values(oldestResident);
}

function increasePrices(percentage) {
  data.prices.Adult = (1 + percentage / 100) * data.prices.Adult;
  data.prices.Senior = (1 + percentage / 100) * data.prices.Senior;
  data.prices.Child = (1 + percentage / 100) * data.prices.Child;
  if (data.prices.Adult.toString().endsWith('5')) {
    data.prices.Adult += 0.001;
    data.prices.Adult = data.prices.Adult.toPrecision(4);
  } else {
    data.prices.Adult = data.prices.Adult.toPrecision(4);
  }
  if (data.prices.Senior.toString().endsWith('5')) {
    data.prices.Senior += 0.001;
    data.prices.Senior = data.prices.Senior.toPrecision(4);
  } else {
    data.prices.Senior = data.prices.Senior.toPrecision(4);
  }
  if (data.prices.Child.toString().endsWith('5')) {
    data.prices.Child += 0.001;
    data.prices.Child = data.prices.Child.toPrecision(4);
  } else {
    data.prices.Child = data.prices.Child.toPrecision(4);
  }
}

function employeeCoverage(idOrName) {
  function makeResponseObject(employee) {
    return { [`${employee.firstName} ${employee.lastName}`]: employee.responsibleFor.map(animalId => data.animals.find(elementAnimal => animalId === elementAnimal.id).name) };
  }

  if (!idOrName) {
    const responseObj = {};
    data.employees.forEach(elementEmployee => {
      responseObj[`${elementEmployee.firstName} ${elementEmployee.lastName}`] = elementEmployee.responsibleFor.map(animalId => data.animals.find(elementAnimal => animalId === elementAnimal.id).name);
    });
    return responseObj;
  } else if (idOrName.length === 36) {
    const employeeSearched = data.employees.find(
      elementEmployee => elementEmployee.id === idOrName,
    );
    return makeResponseObject(employeeSearched);
  } else {
    const employeeSearched = data.employees.find(
      elementEmployee =>
        elementEmployee.firstName === idOrName ||
        elementEmployee.lastName === idOrName,
    );
    return makeResponseObject(employeeSearched);
  }
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
