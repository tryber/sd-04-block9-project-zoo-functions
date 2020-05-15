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
  const resultMap = ids.map((id) => {
    console.log(id);
    const resultFind = data.animals.find(animal => animal.id === id);
    console.log(resultFind);
    return resultFind;
  }); // includes
  console.log(resultMap);
  return resultMap;
}
// animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
// 'e8481c1d-42ea-4610-8e11-1752cfc05a46');

function animalsOlderThan(animal, age) {
  const nomeEspecie = data.animals.find(especie => especie.name === animal);
  console.log(nomeEspecie);
  const isIdadeMinima = nomeEspecie.residents.every(resident => resident.age > age);
  console.log(isIdadeMinima);
  return isIdadeMinima;
}

// nimalsOlderThan('penguins', 10);

function employeeByName(employeeName) {
  // console.log(employeeName);
  const ReduceEmployee = data.employees.reduce((accumulator, employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName
      ? employee : accumulator), {});
  console.log(ReduceEmployee);
  return ReduceEmployee;
}

//  employeeByName();

function createEmployee(personalInfo, associatedWith) {
  console.log(personalInfo, associatedWith);
  const newEmployee = Object.assign(personalInfo, associatedWith);
  return newEmployee;
}

// console.log(createEmployee({nome: 'teste'}, {idade: 'teste2'}));

function isManager(id) {
  const verifyManager = data.employees.some(employee =>
    employee.managers.find(mananger => mananger === id));
  // console.log(verifyManager);
  return verifyManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  console.log(species);
  const resultAnimalCount = data.animals.reduce((accumulator, animal) => {
    const { name, residents } = animal; // destructuring do objeto
    if (species === undefined) {
      // console.log(animal.name, animal.residents.length):
      // se não fosse string usaria desta forma [`${name}`]
      accumulator[name] = residents.length; // adicionando uma nova chave,
    } else if (name === species) {
      accumulator = residents.length;
    }
    return accumulator;
  }, {}, // look o reduce se não passado nenhum valor para inicializar o accumulator,
    // ele inicializa com o primeiro valor que tem no animal
  );
  return resultAnimalCount;
}

// console.log(animalCount());

function entryCalculator(entrants = {}) { // defalt paraments
  return Object.keys(entrants) // a chave vira um array, o return vai receber o resultado de reduce
    .reduce((accumulator, participant, index) =>
      accumulator + (entrants[participant] * data.prices[participant]), 0);
      // entrants.adult= quantidad
}

// Refatoração de código-- Criado arrowFucntion para função de Filter
const FilterAnimals = location =>
  data.animals.filter(animalFilter => animalFilter.location === location);

const CreateNewAnimalMap = (animal, newObj, options) => {
  // recebe todos os animais daquela localização
  const filterAnimal = FilterAnimals(animal.location);
  newObj[animal.location] = [];
  filterAnimal.forEach((filtro) => {
    if (options.includeNames) { // vem do ObjectSpecieName, vem true
      const ObjectSpecieName = {}; // serve para criar um novo objeto dentro do acumulator
      ObjectSpecieName[filtro.name] = []; // criando um novo nó, recebendo um array vazio
      filtro.residents.forEach((resident) => { // Vai alimentar os dados no nó
        // comparando parametros que vem no options
        if (options.sex === undefined || resident.sex === options.sex) {
          ObjectSpecieName[filtro.name].push(resident.name); // vai adicionado
          if (options.sorted) { // se vier com sorted, ele vai ordenar
            ObjectSpecieName[filtro.name].sort(); // ordena em ordem crescente
          }
        }
      });
      // quando true, cria um objeto de arrays que tem um objeto de array
      newObj[animal.location].push(ObjectSpecieName); // grava dados no newObject
    } else {
      // quando false, cria um objeto de arrays
      newObj[animal.location].push(filtro.name);
    }
  });
  return newObj;
};

function animalMap(options = {}) { // default Params
  let newObj = {}; // objeto que vai montar toda a estrutura para depois devolver o resultado
  data.animals.forEach((animal) => {
    if (!newObj[animal.location]) { // Pra não duplicar os registros
      newObj = CreateNewAnimalMap(animal, newObj, options);
    }
  });

  return newObj;
}

// console.log(animalMap({ includeNames: true, sorted: true }));

// {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes']\
// };

function schedule(dayName = '') {
  // Transformar o objeto em array com key
  return Object.keys(data.hours).reduce((accumulator, hour) => {
    // Verificando o que vem no day name
    if (dayName === '' || dayName === hour) {
      accumulator[hour] = hour === 'Monday' ? 'CLOSED'
        : `Open from ${data.hours[hour].open}am until ${data.hours[hour].close - 12}pm`;
    }
    // Criando chave dia da semana que esta dentro de hour, e pegando as informações
    return accumulator;
  }, {});
}

console.log(schedule('Saturday'));


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
