const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const separateEmployes1 = (data.employees.filter((object) => object.firstName === employeeName));
  const firstNameEmploye = separateEmployes1[0];
  const separateEmployes2 = (data.employees.filter((object) => object.lastName === employeeName));
  const lastNameEmploye = separateEmployes2[0];
  let result = [];

  if (separateEmployes1.length > 0) {
    result = firstNameEmploye;
  } else if (separateEmployes2.length > 0) {
    result = lastNameEmploye;
  } else {
    result = {};
  }

  return result;
}

module.exports = getEmployeeByName;
