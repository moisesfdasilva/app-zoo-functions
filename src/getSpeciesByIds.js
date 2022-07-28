const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const reg = [...ids];
  const result1 = [];
  const result2 = [];

  for (let index = 0; index < reg.length; index += 1) {
    result1[index] = (data.species.filter((a) => a.id === reg[index]));
    result2.push(result1[index][0]);
  }
  return result2;
}

module.exports = getSpeciesByIds;
