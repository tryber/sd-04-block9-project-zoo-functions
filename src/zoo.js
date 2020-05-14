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

const { animals, employees, prices, hours } = data;

const animalsByIds = (...ids) => animals.filter(animal => ids.some(id => animal.id === id));

const animalsOlderThan = (name, age) => animals.find(animal => name === animal.name).residents.every(res => res.age >= age);

const employeeByName = (eName) => {
  const employeeFiltered = employees.find(e => e.firstName === eName || e.lastName === eName);
  return {
    ...employeeFiltered,
  };
};

const createEmployee = ({ id, firstName, lastName }, { managers, responsibleFor }) => ({
  id,
  firstName,
  lastName,
  managers,
  responsibleFor,
});

const isManager = id => employees.some(e => e.managers.some(m => m === id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(employee);
};

const animalCount = (species = 'all') => {
  if (species === 'all') {
    let animalsNumbers = {};
    animals.forEach(({ name, residents }) => {
      animalsNumbers = {
        ...animalsNumbers,
        [name]: residents.length,
      };
    });
    return animalsNumbers;
  }
  return animals.find(specie => specie.name === species).residents.length;
};

const entryCalculator = ({ Adult = 0, Child = 0, Senior = 0 }) => {
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
};

//funções auxiliares para a animalMap


const filter = location => animals.filter(animal => animal.location === location);

const getName = arr => arr.map(animal => animal.name);

//gambiarra feita para filtrar por sexo sem alterar muito as funções, precisa ser refatorada

const findResidents = (name) => animals.find(animal => animal.name === name).residents

const findAndMapResidents = (name, sex) => {
  if (sex) {
    return findResidents(name).filter(resident => resident.sex === sex).map(resident => resident.name);
  }
  return findResidents(name).map(resident => resident.name);
};

const getResidents = (names, includeNames, sorted, sex) => {
  let residentsObj = [];
  if (includeNames) {
    names.forEach((name) => {
      residentsObj = [
        ...residentsObj,
        { [name]: sorted ? findAndMapResidents(name, sex).sort() : findAndMapResidents(name, sex) },
      ];
    });
    return residentsObj;
  }
  return names;
};

const animalMap = (opt) => {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const animalLocations = {};
  if (opt) {
    const { includeNames = false, sorted = false, sex = false } = opt
    locations.forEach((l) => {
      animalLocations[l] = getResidents(getName(filter(l)), includeNames, sorted, sex);
    });
    return animalLocations;
  };
  locations.forEach(l => {
    animalLocations[l] = getResidents(getName(filter(l)));
  });
  return animalLocations;
}

//função auxiliar para a schedule


const checkDate = (open, close) => { return open === 0 ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`};

const fullschedule = () => {
  let scheduleObj = {};
  Object.keys(hours).forEach((hour) => {
    scheduleObj = {
      ...scheduleObj,
      [hour]: checkDate(hours[hour].open, hours[hour].close),
    };
  });
  return scheduleObj;
};

const schedule = (dayName) => {
  if (dayName !== undefined) {
    return { [dayName]: checkDate(hours[dayName].open, hours[dayName].close) }
  }
  return fullschedule()
};

//função auxiliar para findAnimalId

const findAnimalId = id => employees.find(employee => employee.id === id).responsibleFor[0];

const findAnimalArr = id => animals.find(animal => animal.id === findAnimalId(id));

const oldestFromFirstSpecies = (id) => {
  let oldest = Object.values(findAnimalArr(id).residents.reduce((older, resident) => {
    older = older.age > resident.age ? older : resident;
    return older;
  }));
  return oldest;
};

const increasePrices = (percentage) => {
  Object.keys(prices).forEach((element) => {
    prices[element] = Math.ceil(prices[element] * (percentage + 100)) / 100;
  });
};

//funções auxiliares para employeeCoverage
 

const findEmployee = (idOrName) => {
  const employeeFound = employees.find((employee) => {
    const { id, firstName, lastName } = employee;
    if (id === idOrName || firstName === idOrName || lastName === idOrName) {
      return true;
    };
    return false;
  });
  return employeeFound;
};

const createResponsibleArr = (responsibleForArr) => {
  const responsibleArray = responsibleForArr.map((animalId) => {
    const animalName = animals.find(animal => animal.id === animalId).name;
    return animalName;
  });
  return responsibleArray;
};

const employeeCoverage = (idOrName) => {
  let employeeCoverageObj = {};
  if (!idOrName) {
    employees.forEach(({ firstName, lastName, responsibleFor }) => {
      employeeCoverageObj = {
        ...employeeCoverageObj,
        [`${firstName} ${lastName}`]: createResponsibleArr(responsibleFor),
      };
    });
    return employeeCoverageObj
  };
  const { firstName, lastName, responsibleFor } = findEmployee(idOrName);
  employeeCoverageObj[`${firstName} ${lastName}`] = createResponsibleArr(responsibleFor);
  return employeeCoverageObj;
};

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
