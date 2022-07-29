const data = require('../data/zoo_data');

const newfunction = (scheduleTarget) => {
  const abcd = (data.species.filter((a) => a.availability.includes(scheduleTarget)));
  const abcde = [];
  abcd.forEach((element) => abcde.push(element.name));
  const textPt1 = `Open from ${data.hours.scheduleTarget.open}am until`;
  const textPt2 = `${data.hours.scheduleTarget.close}pm`;
  const result = {
    scheduleTarget: {
      exhibition: abcd,
      officeHour: `${textPt1} ${textPt2}`,
    },
  };
  return result;
  // officeHour = 'Open from 8am until 6pm'; -> data.hours.
  // exhibition = [array de animais disponíveis no dia];
  // {"Tuesday": {"exhibition": ["lions", "tigers", "bears", "penguins", "elephants", "giraffes"], "officeHour": "Open from 8am until 6pm"}}
};

function getSchedule(scheduleTarget) {
  let result = [];
  const abc = (data.species.filter((a) => a.name === scheduleTarget));
  const dayOfWeek = Object.keys(data.hours);

  if (typeof scheduleTarget === 'undefined') {
    result = data.hours;
  } else if (abc.length > 0) {
    result = abc[0].availability;
  } else if (dayOfWeek.includes(scheduleTarget)) {
    result = newfunction(scheduleTarget);
  }
  return result;
}
console.log(getSchedule('Tuesday'));
// -vazio!
// 'lions'
// 'Tuesday'

module.exports = getSchedule;
