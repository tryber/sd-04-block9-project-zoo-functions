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

function animalsByIds(...ids) { // rest
  return data.animals.filter((animal) => { // filter
    for (let i = 0; i < ids.length; i += 1) {
      if (animal.id === ids[i]) return true;  // testar ?:
    }
    return false;
  });
}

function animalsOlderThan(animal, age) {
  return data.animals.find(species => species.name === animal).residents // find
    .every(resident => resident.age >= age); // every
}

function employeeByName(employeeName = {}) { // default params
  if (Object.keys(employeeName).length === 0) return employeeName; // keys
  return data.employees.find(employee => employee.firstName === employeeName || // find
    employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign({}, personalInfo, associatedWith); // assign
}

function isManager(id) {
  let is = false;
  data.employees.forEach(employee => // forEach
    employee.managers.find((manager) => { // find
      if (manager === id) is = true;
      return is;
    }), // CC exigiu essa "," no final mas não entendi o porque ???
  );
  return is;
}

function addEmployee(id, firstName, lastName,
  managers = [], responsibleFor = []) { // default params
  return data.employees.push({ // abreviation object literal
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, animal) => { // reduce
      const { name } = animal; // object destructuring
      acc[name] = animal.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find(animal => animal.name === species).residents.length; // find
}

function entryCalculator(entrants = 0) {
  if (Object.keys(entrants).length === 0) return 0; // keys
  const { Adult, Senior, Child } = data.prices; // object destructuring
  const priceChild = entrants.Child * Child;
  const priceAdult = entrants.Adult * Adult;
  const priceSenior = entrants.Senior * Senior;
  return priceChild + priceAdult + priceSenior;
}

// animalMap functions

const incLoc = () => {
  const o = {};
  data.animals.forEach((animal) => {
    if (!o.hasOwnProperty(animal.location)) {
      o[animal.location] = [];
    }
  });
  return o;
};

const incSpe = (incLocF) => {
  data.animals.forEach((animal) => {
    if (incLocF.hasOwnProperty(animal.location))
      incLocF[animal.location].push(animal.name);
    else
      incLocF[animal.location] = [animal.name];
  });
  return incLocF;
};

const inc = (oLoc, namGen) => {
  data.animals.forEach((animal) => {
    for (let i = 0; i < namGen.length; i += 1) {
      if (namGen[i].hasOwnProperty(animal.name))
        oLoc[animal.location].push(namGen[i]);
    }
  });
  return oLoc;
}

const incNam = () => {
  const oNam = data.animals.map((animal) => {
    const o = {};
    o[animal.name] = animal.residents.map(resident => resident.name);
    return o;
  });
  return oNam;
};

const incNamSor = () => {
  const namOrd = inc(incLoc(), incNam());
  Object.keys(namOrd).forEach(loc => namOrd[loc].forEach(esp => Object.keys(esp).forEach(pEsp => esp[pEsp].sort())));
  return namOrd;
}

const incNamGen = () => {
  const oNamFem = data.animals.map(animal => {
    const o = {};
    o[animal.name] = animal.residents.filter(resident => resident.sex === 'female').map(res => res.name);
    return o;
  });
  return oNamFem;
}

function animalMap(options) {
  const opt = options && Object.keys(options);
  const incL = incLoc();
  const incN = incNam();
  const incNG = incNamGen();
  if (!opt || opt.includes('sex') && opt.length === 1) return incSpe(incL);
  if (opt.includes('includeNames') && opt.includes('sorted')) return incNamSor();
  if (opt.includes('includeNames') && opt.includes('sex') && options.sex === 'female')
    return inc(incL, incNG);
  if (opt.includes('includeNames')) return inc(incL, incN);
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
