const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const separateSpecies = (data.species.filter((object) => object.name === animal));
  const separateAnimals = separateSpecies[0].residents;
  const separateAges = [];
  separateAnimals.forEach((element) => separateAges.push(element.age));

  return separateAges.every((animAge) => animAge >= age);
}
console.log(getAnimalsOlderThan('tigers', 22));

module.exports = getAnimalsOlderThan;
