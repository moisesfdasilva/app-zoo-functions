const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const objEmployee = (data.employees.find((a) => a.id === id));
  const firstEmployeeAnimal = objEmployee.responsibleFor[0];
  const objAnimal = (data.species.find((a) => a.id === firstEmployeeAnimal));
  const objResidents = objAnimal.residents;
  const objResidentsSort = objResidents.sort((a, b) => (b.age - a.age));
  const result = Object.values(objResidentsSort[0]);

  return result;
}

module.exports = getOldestFromFirstSpecies;
