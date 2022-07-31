const data = require('../data/zoo_data');

const newfunction = (scheduleTarget) => {
  let exhibResult = [];
  let officeHourText = [];
  if (scheduleTarget === 'Monday') {
    exhibResult = 'The zoo will be closed!';
    officeHourText = 'CLOSED';
  } else {
    const animalForDay = (data.species.filter((a) => a.availability.includes(scheduleTarget)));
    animalForDay.forEach((element) => exhibResult.push(element.name));
    const textPt1 = `Open from ${data.hours[scheduleTarget].open}am until`;
    const textPt2 = `${data.hours[scheduleTarget].close}pm`;
    officeHourText = `${textPt1} ${textPt2}`;
  }
  const result = {
    [scheduleTarget]: { officeHour: officeHourText, exhibition: exhibResult } };
  return result;
};

function getSchedule(scheduleTarget) {
  let result = {};
  const objAnimal = (data.species.filter((element) => element.name === scheduleTarget));
  const dayOfWeek = Object.keys(data.hours);

  if (objAnimal.length > 0) {
    result = objAnimal[0].availability;
  } else if (dayOfWeek.includes(scheduleTarget)) {
    result = newfunction(scheduleTarget);
  } else {
    dayOfWeek.sort();
    dayOfWeek.forEach((element) => {
      const resultArrayDestruturing = (Object.values(newfunction(element)))[0];
      result[element] = resultArrayDestruturing;
    });
  }
  return result;
}

module.exports = getSchedule;
