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

function animalsByIds(...ids) {
  return data.animals.filter((animal) => {
    for (let i = 0; i < ids.length; i += 1) {
      if (animal.id === ids[i]) return true;
    }
    return false;
  });
}

function animalsOlderThan(animal, age) {
  return data.animals.find(species => species.name === animal).residents
    .every(resident => resident.age >= age);
}

function employeeByName(employeeName = {}) {
  if (Object.keys(employeeName).length === 0) return employeeName;
  return data.employees.find(employee => employee.firstName === employeeName ||
    employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  let is = false;
  data.employees.forEach(employee =>
    employee.managers.find((manager) => {
      if (manager === id) is = true;
      return is;
    }), // CC exigiu essa "," no final mas não entendi o porque ???
  );
  return is;
}

function addEmployee(id, firstName, lastName,
  managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, animal) => {
      const { name } = animal;
      acc[name] = animal.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants = 0) {
  if (Object.keys(entrants).length === 0) return 0;
  const { Adult, Senior, Child } = data.prices;
  const priceChild = entrants.Child * Child;
  const priceAdult = entrants.Adult * Adult;
  const priceSenior = entrants.Senior * Senior;
  return priceChild + priceAdult + priceSenior;
}

// animalMap functions

const incLoc = () => {
  const o = {};
  data.animals.forEach((animal) => {
    if (!Object.hasOwnProperty.call(o, animal.location)) {
      o[animal.location] = [];
    }
  });
  return o;
};

const incSpe = (incLocF) => {
  data.animals.forEach((animal) => {
    if (Object.hasOwnProperty.call(incLocF, animal.location)) {
      incLocF[animal.location].push(animal.name);
    } else {
      incLocF[animal.location] = [animal.name];
    }
  });
  return incLocF;
};

const inc = (oLoc, namGen) => {
  data.animals.forEach((animal) => {
    for (let i = 0; i < namGen.length; i += 1) {
      if (Object.hasOwnProperty.call(namGen[i], animal.name)) {
        oLoc[animal.location].push(namGen[i]);
      }
    }
  });
  return oLoc;
};

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
  Object.keys(namOrd).forEach(loc => namOrd[loc].forEach(esp =>
    Object.keys(esp).forEach(pEsp => esp[pEsp].sort())));
  return namOrd;
};

const incNamGen = () => {
  const oNamFem = data.animals.map((animal) => {
    const o = {};
    o[animal.name] = animal.residents.filter(resident => resident.sex === 'female').map(res => res.name);
    return o;
  });
  return oNamFem;
};

const if1 = (opt = []) => {
  if (opt.includes('sex')) return incSpe(incLoc());
  if (opt.includes('includeNames')) return inc(incLoc(), incNam());
  return opt;
};

const if2 = (opt = []) => {
  if (opt.includes('includeNames') && opt.includes('sorted')) return incNamSor();
  if (opt.includes('includeNames') && opt.includes('sex')) return inc(incLoc(), incNamGen());
  return opt;
};

function animalMap(options) {
  const op = options && Object.keys(options);
  let ret = {};
  if (!op) return incSpe(incLoc());
  if (op.length === 1) {
    ret = if1(op);
    return ret;
  }
  if (op.length === 2) {
    ret = if2(op);
    return ret;
  }
  return ret;
}

// schedule functions

const opn = () => {
  const hOpen = Object.values(data.hours).map((hour) => {
    let h;
    if (hour.open !== 0) h = hour.open;
    return h;
  });
  return hOpen;
};

const cls = () => {
  const hClose = Object.values(data.hours).map(hour => hour.close).map((h) => {
    let n;
    if (h === 0) n = 'CLOSED';
    if (h !== 0) n = h - 12;
    return n;
  });
  return hClose;
};

function schedule(dayName) {
  const open = opn();
  const close = cls();
  const cron = {
    Tuesday: `Open from ${open[0]}am until ${close[0]}pm`,
    Wednesday: `Open from ${open[1]}am until ${close[1]}pm`,
    Thursday: `Open from ${open[2]}am until ${close[2]}pm`,
    Friday: `Open from ${open[3]}am until ${close[3]}pm`,
    Saturday: `Open from ${open[4]}am until ${close[4]}pm`,
    Sunday: `Open from ${open[5]}am until ${close[5]}pm`,
    Monday: close[6],
  };
  if (!dayName) {
    return cron;
  }
  return { [dayName]: cron[dayName] };
}

function oldestFromFirstSpecies(id) {
  const idAni = data.employees
    .filter(employee => employee.id === id)
    .map(emp => emp.responsibleFor[0]);
  const ani = data.animals
    .find(animal => animal.id === idAni[0]);
  const age = ani.residents.reduce((acc, item) => {
    if (item.age > acc) {
      acc = item.age;
    }
    return acc;
  }, 0);
  const infs = ani.residents.filter(resident => resident.age === age);
  return Object.keys(infs[0]).map(key => infs[0][key]);
}

function increasePrices(percentage) {
  let { Adult, Senior, Child } = data.prices;
  Adult = (Math.round(Adult * (percentage / 100)) + Adult).toFixed(2);
  Senior = (Math.round(Senior * (percentage / 100)) + Senior + 0.50).toFixed(2);
  Child = (Math.round(Child * (percentage / 100)) + Child + 0.50).toFixed(2);
  parseFloat(Adult);
  parseFloat(Senior);
  parseFloat(Child);
  return {
    Adult,
    Senior,
    Child,
  };
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
