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

const funcionarios = data.employees;// Constante recebe a segunda entrada do array em data
const animals = data.animals;// Constante animals recebe a primeira entrada do array em data
const precos = data.prices;
function animalsByIds(...ids) {
  let animaisFiltradosPorId = [];
  ids.forEach((id) => {
    animaisFiltradosPorId = [...animaisFiltradosPorId, ...animals.filter((animal) => {
      if (animal.id === id) return true;
      return false;
    })];
  });
  return animaisFiltradosPorId;
}

function animalsOlderThan(animal, age) {
  const animalFiltradoPorEspecie = animals.filter((elementoAnimal) => {
    if (elementoAnimal.name === animal) return true;
    return false;
  });
  return animalFiltradoPorEspecie[0].residents.every((animalElemento) => {
    if (animalElemento.age >= age) return true;
    return false;
  });
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const funcionarioFiltrado = funcionarios.filter((funcionario) => {
    if (funcionario.firstName === employeeName || funcionario.lastName === employeeName) {
      return true;
    }
    return false;
  });
  return funcionarioFiltrado[0];
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const gerentes = funcionarios.map(funcionario => funcionario.managers);
  return gerentes.some(managers => managers.find((manager) => {
    if (manager === id) return true;
    return false;
  }));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  let arrayManagers = [];
  let arrayResponsibleFor = [];
  if (managers && managers.length > 0) {
    arrayManagers = [...managers];
  }
  if (responsibleFor && responsibleFor.length > 0) {
    arrayResponsibleFor = [...responsibleFor];
  }
  return funcionarios.push({
    id,
    firstName,
    lastName,
    managers: arrayManagers,
    responsibleFor: arrayResponsibleFor,
  });
}

const listarNomes = () => {
  const nomes = {};
  let nome;
  for (let i = 0; i < animals.length; i += 1) {
    nome = animals[i].name;
    nomes[nome] = animals[i].residents.length;
  }
  return nomes;
};

function animalCount(species) {
  if (!species) {
    return listarNomes();
  }
  for (let i = 0; i < animals.length; i += 1) {
    if (animals[i].name === species) {
      return animals[i].residents.length;
    }
  }
  return undefined;
}

function entryCalculator(entrants) {
  let total = 0;
  let soma = 0;
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  total = Object.values(entrants);
  soma = (total[0] * precos.Adult) + (total[1] * precos.Child) + (total[2] * precos.Senior);
  return soma;
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
