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

const animalsByIds = (...ids) => data.animals.filter(animal => ids.some(id => animal.id === id))

const animalsOlderThan = (animalName, age) => data.animals.find(animal => animalName === animal.name).residents.every(resident => resident.age >= age)

const employeeByName = (employeeName) => {
  const employeeFiltered = data.employees.find(employee => employee.firstName === employeeName || employee.lastName === employeeName)
  return {
    ...employeeFiltered
  }
}

const createEmployee = ({ id, firstName, lastName }, { managers, responsibleFor }) => ({
  id,
  firstName,
  lastName,
  managers,
  responsibleFor,
})

const isManager = (id) => data.employees.some(employee => employee.managers.some(maneger => maneger === id))

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }
  data.employees.push(employee)
}

const animalCount = (species = "all") => {
  if (species === "all") {
    let animalsNumbers = {};
    data.animals.forEach(({ name, residents }) => {
      animalsNumbers = {
        ...animalsNumbers,
        [name]: residents.length
      }
    }
    )
    return animalsNumbers
  }
  return data.animals.find(specie => specie.name === species).residents.length
}

const entryCalculator = ({ Adult = 0, Child = 0, Senior = 0 }) => Adult * data.prices.Adult + Child * data.prices.Child + Senior * data.prices.Senior

//funções auxiliares para a animalMap

const filter = (location) => data.animals.filter(animal => animal.location === location)

const getName = (arr) => arr.map(animal => animal.name)

//gambiarra feita para filtrar por sexo sem alterar muito as funções, precisa ser refatorada

const findAndMapResidents = (name, sex) => sex ? data.animals.find(animal => animal.name === name).residents.filter(resident => resident.sex === sex).map(resident => resident.name) : data.animals.find(animal => animal.name === name).residents.map(resident => resident.name)

const getResidents = (names, includeNames, sorted, sex) => {
  let residentsObj = []
  if (includeNames) {
    names.forEach(name => {
      residentsObj = [
        ...residentsObj,
        { [name]: sorted ? findAndMapResidents(name, sex).sort() : findAndMapResidents(name, sex) }
      ]
    })
    return residentsObj
  }
  return names
}

const animalMap = (options) => {
  const {includeNames, sorted, sex} = options ? options : {includeNames: false, sorted: false, sex: false}
  const locations = ["NE", "NW", "SE", "SW"]
  let animalLocations = {}
  locations.forEach(location => {
    animalLocations[location] = getResidents(getName(filter(location)), includeNames, sorted, sex)
  })
  return animalLocations
}
options = { includeNames: true }

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
