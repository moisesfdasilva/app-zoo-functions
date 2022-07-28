const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const reg = [...ids];
  const result = [];
  for (let index = 0; index < reg.length; index += 1) {
    result[index] = (data.species.filter((a) => a.id === reg[index]));
  }
  return result;
}
// const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
// const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';
// console.log(getSpeciesByIds(lionId, tigersId));

module.exports = getSpeciesByIds;
