const data = require('../data/zoo_data');

function isManager(id) {
  const manArrId = [];
  data.employees.forEach((element1) => (
    element1.managers.forEach((element2) => (
      manArrId.push(element2)
    ))
  ));
  return manArrId.some((manId) => manId === id);
}

const verifyId = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

function getRelatedEmployees(managerId) {
  verifyId(managerId);
  const empArrId = [];
  data.employees.forEach((element1) => (
    element1.managers.forEach((element2) => (
      empArrId.push({
        emp: `${element1.firstName} ${element1.lastName}`,
        man: element2,
      })
    ))
  ));
  const separateEmployee = (empArrId.filter((object) => object.man === managerId));
  const empArrName = [];
  separateEmployee.forEach((element) => (empArrName.push(element.emp)));
  return empArrName;
}

module.exports = { isManager, getRelatedEmployees };
