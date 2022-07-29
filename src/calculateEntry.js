const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const arrayAge = [];
  entrants.forEach((element) => arrayAge.push(element.age));
  const eChild = (arrayAge.filter((element) => element < 18));
  const eAdult = (arrayAge.filter((element) => element >= 18 && element < 50));
  const eSenior = (arrayAge.filter((element) => element >= 50));
  const entrantsAge = {
    child: eChild.length,
    adult: eAdult.length,
    senior: eSenior.length,
  };
  return entrantsAge;
}

function calculateEntry(entrants) {
  let result = [];
  if (typeof entrants === 'undefined') {
    result = 0;
  } else if (Object.values(entrants).length < 1) {
    result = 0;
  } else {
    const entrantsAge = countEntrants(entrants);
    entrantsAge.child = Number(entrantsAge.child) * Number(data.prices.child);
    entrantsAge.adult = Number(entrantsAge.adult) * Number(data.prices.adult);
    entrantsAge.senior = Number(entrantsAge.senior) * Number(data.prices.senior);
    result = Object.values(entrantsAge).reduce((a, b) => (a + b));
  }
  return result;
}

module.exports = { calculateEntry, countEntrants };
