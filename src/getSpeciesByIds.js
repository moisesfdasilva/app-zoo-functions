const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const reg = [...ids];
  let result1 = [];
  let result2 = [];

  for (let index = 0; index < reg.length; index += 1) {
    result1[index] = (data.species.filter((a) => a.id === reg[index]));
    result2[index] = result1[index][0];
  }
  return result2;
}

module.exports = getSpeciesByIds;
