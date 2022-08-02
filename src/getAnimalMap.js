const data = require('../data/zoo_data');

const ArrayPlace = ['NE', 'NW', 'SE', 'SW'];

const optNotIncNamTrue = () => {
  let animalSpecie = [];
  const result = {};
  ArrayPlace.forEach((place) => {
    const animal = data.species.filter((element) => element.location === place);
    animal.forEach((element) => (animalSpecie.push(element.name)));
    result[place] = animalSpecie;
    animalSpecie = [];
  });
  return result;
};

const sex = (animal, options) => {
  const result = [];
  let animalResid = [];
  animal.forEach((element1) => {
    element1.residents.forEach((element2) => {
      if (element2.sex === options.sex) {
        animalResid.push(element2);
      }
    });
    result.push({ name: element1.name, residents: animalResid });
    animalResid = [];
  });
  return result;
};

const optIncNamTrue = (options) => {
  let AnimalResid = [];
  let ArrObjAnResid = [];
  const objPlace = {};
  ArrayPlace.forEach((place) => {
    const animal = data.species.filter((obj) => obj.location === place);
    const animalB = (typeof options.sex === 'undefined') ? animal : sex(animal, options);
    animalB.forEach((element1) => {
      element1.residents.forEach((element2) => { AnimalResid.push(element2.name); });
      AnimalResid = (options.sorted === true) ? AnimalResid.sort() : AnimalResid;
      ArrObjAnResid.push({ [element1.name]: AnimalResid });
      AnimalResid = [];
    });
    objPlace[place] = ArrObjAnResid;
    ArrObjAnResid = [];
  });
  return objPlace;
};

function getAnimalMap(options) {
  let result = [];
  if (typeof options === 'undefined') {
    result = optNotIncNamTrue();
  } else if (options.includeNames === true) {
    result = optIncNamTrue(options);
  } else if (options.sorted === true) {
    result = optNotIncNamTrue();
  } else if ((options.sex).length > 0) {
    result = optNotIncNamTrue();
  }
  return result;
}

module.exports = getAnimalMap;
