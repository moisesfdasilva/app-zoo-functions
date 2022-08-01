const data = require('../data/zoo_data');

const createObject = (employeeObj) => {
  const animalArray = [];
  const animalName = [];
  const animalLocation = [];
  employeeObj.responsibleFor.forEach((index) => {
    animalArray.push(data.species.find((element) => (element.id === index)));
  });
  animalArray.forEach((element) => {
    animalName.push(element.name);
    animalLocation.push(element.location);
  });
  const result = {
    id: employeeObj.id,
    fullName: `${employeeObj.firstName} ${employeeObj.lastName}`,
    species: animalName,
    locations: animalLocation,
  };
  return result;
};

const exceptionText = (idArray) => {
  const result = [];
  idArray.forEach((index) => {
    const employeeObj = (data.employees.find((element) => element.id === index));
    result.push(createObject(employeeObj));
  });
  return result;
};

const analyseText = (inputText, idArray, firstNameArray, lastNameArray) => {
  let employeeObj = [];
  if (idArray.includes(inputText.id)) {
    employeeObj = (data.employees.find((element) => element.id === inputText.id));
  } else if (firstNameArray.includes(inputText.name)) {
    employeeObj = (data.employees.find((element) => element.firstName === inputText.name));
  } else if (lastNameArray.includes(inputText.name)) {
    employeeObj = (data.employees.find((element) => element.lastName === inputText.name));
  } else {
    throw new Error('Informações inválidas');
  }
  const result = createObject(employeeObj);
  return result;
};

function getEmployeesCoverage(inputText) {
  let result = [];
  const idArray = [];
  const firstNameArray = [];
  const lastNameArray = [];
  data.employees.forEach((element) => {
    idArray.push(element.id);
    firstNameArray.push(element.firstName);
    lastNameArray.push(element.lastName);
  });
  if (typeof inputText === 'undefined') {
    result = exceptionText((idArray));
  } else {
    result = analyseText(inputText, idArray, firstNameArray, lastNameArray);
  }
  return result;
}

module.exports = getEmployeesCoverage;
