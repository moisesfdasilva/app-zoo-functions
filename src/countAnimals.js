const data = require('../data/zoo_data');

function countAnimals(obj) {
  let result = {};
  let newArray = [];
  if (typeof obj === 'undefined') {
    data.species.forEach((element1) => {
      result[element1.name] = element1.residents.length;
    });
  } else {
    newArray = data.species.filter((a) => a.name === Object.values(obj)[0]);
    if (Object.values(obj).length === 1) {
      result = newArray[0].residents.length;
    } else {
      result = newArray[0].residents.filter((a) => a.sex === Object.values(obj)[1]);
      result = result.length;
    }
  }
  return result;
}

module.exports = countAnimals;
