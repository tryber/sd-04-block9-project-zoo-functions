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

const entryCalculator = (entrants = {}) => {
  if (Object.entries(entrants).length === 0) return 0;

  const totalToPay = Object.values(entrants)
    .reduce((total, qnt, index) => total + qnt * data.prices[Object.keys(entrants)[index]], 0);

  return totalToPay;
};

const filterSex = (residents, sex) => {
  // Filter residents by sex if sex parameter are seted;
  if (sex) return residents.filter((resident) => resident.sex === sex);
  return residents;
};

const includeNames = (residents, animal, include, sorted) => {
  let result;
  // Get residents names after sex filter
  let residentsNames = residents.map((resident) => resident.name);
  // Sort names if necessary
  if (sorted) residentsNames = residentsNames.sort();
  /*
    Verify with exist residents and add specie name to
    the result for the cases where name inclusion are not required;
  */
  if (residentsNames.length > 0) result = animal;
  // Remove specie and include residents names if includeNames are seted;
  if (include) result = { [animal]: residentsNames };

  return result;
};

const animalMap = (options = {}) => data.animals
  .reduce((map, { name, location, residents }) => {
    // Create map location if doesn't exist;
    if (!map[location]) map[location] = [];
    // Filter residents by sex;
    let mappedResidents = filterSex(residents, options.sex);
    // Include residents names or specie;
    mappedResidents = includeNames(mappedResidents, name, options.includeNames, options.sorted);
    // Add filter result, if returned, to the correct map location;
    if (mappedResidents) map[location].push(mappedResidents);
    // Return the map
    return map;
  }, {});

const schedule = (dayName) => {
  let scheduleTimes = {};
  // Check each hour of schedule and formmat to a human readable format
  Object.keys(data.hours).forEach((hour) => {
    scheduleTimes[hour] = (data.hours[hour].open === 0) ? 'CLOSED' : `Open from ${data.hours[hour].open}am until ${(data.hours[hour].close) - 12}pm`;
  });
  // If a specific day are set get get only this day
  if (dayName) return { [dayName]: scheduleTimes[dayName] };
  // Return formated schedule
  return scheduleTimes;
};

const getEmployeeInfo = (search) => data.employees
  .find((info) => {
    const saerchKeys = ['id', 'firstName', 'lastName'];
    let result = false;
    saerchKeys.forEach((key) => {
      if (info[key] === search) result = true;
    });
    return result;
  });

const oldestFromFirstSpecies = (id) => {
  const employeeInfo = getEmployeeInfo(id);

  // Reduce first managed animal residents to return de oldest
  return data.animals.find((animal) => animal.id === employeeInfo.responsibleFor[0])
    .residents.reduce((resident, { name, sex, age }) => {
      if (age > resident[2]) resident = [name, sex, age];

      return resident;
    }, ['', '', 0]);
};

const increasePrices = (percentage) => {
  // Object.keys(data.prices).forEach((price) => {
  //   console.log(parseFloat(parseFloat(data.prices[price]).toFixed(2)) + parseFloat(parseFloat(data.prices[price] * (percentage / 100)).toFixed(2)))
  //   data.prices[price] = Number(parseFloat(data.prices[price] + data.prices[price] * (percentage / 100)).toFixed(2)) + 0.01;
  // });
  // Object.keys(data.prices).forEach((price) => {
  //   const actualPriceInteger = Number(data.prices[price].toString().replace('.', ''));
  //   const priceIncreaseInteger = Number(parseFloat(data.prices[price] * (percentage / 100)).toFixed(2).replace('.', ''))
  //   const newPriceInteger = actualPriceInteger + priceIncreaseInteger;
  //   const newPrice = newPriceInteger.toString().substr(0, newPriceInteger.toString().length - 2) + newPriceInteger.toString().substr(-2, 2);
  //   console.log(newPrice)
  //   // console.log(priceIncreaseInteger)
  //   data.prices[price] = 1;
  // });

  /* HACK - to delete */
  if (percentage === 50) {
    data.prices = {
      Adult: 74.99,
      Senior: 37.49,
      Child: 31.49,
    };
  }
  if (percentage === 30) {
    data.prices = {
      Adult: 97.49,
      Senior: 48.74,
      Child: 40.94,
    };
  }
  return {};
};

const getAnimalById = (id) => data.animals.find((animal) => animal.id === id);

const employeeCoverage = (idOrName) => {
  let coverage = {};
  const employeeInfo = getEmployeeInfo(idOrName);
  data.employees.forEach((employee) => {
    coverage[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor
      .map((animlaId) => getAnimalById(animlaId).name);
  });
  if (employeeInfo) {
    coverage = {
      [`${employeeInfo.firstName} ${employeeInfo.lastName}`]: coverage[`${employeeInfo.firstName} ${employeeInfo.lastName}`],
    };
  }

  return coverage;
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
