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

function animalsByIds(...theIds) {
  return data.animals.filter(animal => theIds.includes(animal.id));
}

// console.log(animalsByIds()); --> TESTE 1
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce')); --> TESTE 2
// console.log(animalsByIds(
// '0938aa23-f153-4937-9f88-4858b24d6bce',
// 'e8481c1d-42ea-4610-8e11-1752cfc05a46')) --> TESTE 3

function animalsOlderThan(animal, age) {
  const nomeAnimal = data.animals.find(elemento => elemento.name === animal);
  const idade = nomeAnimal.residents.every(elemento => elemento.age >= age);
  return idade;
}

// console.log(animalsOlderThan('otters', 7)); --> TESTE 1
// console.log(animalsOlderThan('penguins', 10)); -- TESTE 2

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(elemento =>
    (elemento.firstName === employeeName || elemento.lastName === employeeName));
}

// console.log(employeeByName()); //-> TESTE 1
// console.log(employeeByName('Emery')); //--> TESTE 2
// console.log(employeeByName('Wishart')); //--> TESTE 3

function createEmployee(personalInfo, associatedWith) {
  return Object.assign({}, personalInfo, associatedWith);
}

// console.log(createEmployee(personalInfo, associatedWith)); --> TESTE 1

function isManager(id) {
  const contemId = data.employees.some(elemento => elemento.managers.includes(id));
  return contemId;
}

// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')); --> TESTE 1
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83')); --> TESTE 2

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (!managers) managers = [];
  if (!responsibleFor) responsibleFor = [];
  return data.employees.push(
    { id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    });
}

// console.log(addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe'));
// console.log(data.employees);

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const especie = data.animals.find(elemento => elemento.name === species);
  return especie.residents.length;
}

// console.log(animalCount()); --> TESTE 1
// console.log(animalCount('lions')); --> TESTE 2
// console.log(animalCount('snakes')); --> TESTE 3

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult, Child, Senior } = entrants;
  const valorAdulto = Adult * data.prices.Adult;
  const valorCrianca = Child * data.prices.Child;
  const valorOlder = Senior * data.prices.Senior;
  return valorAdulto + valorCrianca + valorOlder;
}

// console.log(entryCalculator()); --> TESTE 1
// console.log(entryCalculator({})); --> TESTE 2
// console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 })); --> TESTE 3

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // if (!dayName) {
  //   const {Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday} = data.hours;
  //   return {
  //     'Tuesday': `Open from ${Tuesday.open}am until ${Tuesday.close - 12}pm`,
  //     'Wednesday': `Open from ${Wednesday.open}am until ${Wednesday.close - 12}pm`,
  //     'Thursday': `Open from ${Thursday.open}am until ${Thursday.close - 12}pm`,
  //     'Friday': `Open from ${Friday.open}am until ${Friday.close - 12}pm`,
  //     'Saturday': `Open from ${Saturday.open}am until ${Saturday.close -12}pm`,
  //     'Sunday': `Open from ${Sunday.open}am until ${Sunday.close -12}pm`,
  //     'Monday': `CLOSED`,
  //   }
  // }
}

function oldestFromFirstSpecies(id) {
  const findById = data.employees.find(elemento => elemento.id === id);
  const primeiraEspecie = findById.responsibleFor[0];
  const findAnimal = data.animals.find(elemento => elemento.id === primeiraEspecie);
  const habitantes = findAnimal.residents;
  let idade = 0;
  habitantes.forEach((elemento) => { if (elemento.age > idade) (idade = elemento.age); });
  let maiorIdade = habitantes.find(elemento => elemento.age === idade);
  maiorIdade = Object.values(maiorIdade);
  return maiorIdade;
}

// console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992')); --> TESTE 1
// console.log(oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad')); --> TESTE 2

function increasePrices(percentage) {
  const { Adult, Child, Senior } = data.prices;
  data.prices.Adult = Math.round((Adult + ((percentage / 100) * Adult)) * 100) / 100;
  data.prices.Child = Math.round((Child + ((percentage / 100) * Child)) * 100) / 100;
  data.prices.Senior = Math.round((Senior + ((percentage / 100) * Senior)) * 100) / 100;
  return data.prices;
}

// console.log(increasePrices(50)); --> TESTE 1
// console.log(increasePrices(30)); --> TESTE 2

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
