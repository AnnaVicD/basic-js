const { NotImplementedError } = require('../extensions/index.js');

const seasons = {
  winter: {
  start: { day: 1, month: 11 },
  end: { day: 28, month: 1 }
},
spring: {
  start: { day: 1, month: 2 },
  end: { day: 31, month: 4 }
},
summer: {
  start: { day: 1, month: 5 },
  end: { day: 31, month: 7 }
},
autumn: {
  start: { day: 1, month: 8 },
  end: { day: 30, month: 10 }
}

}

/**
* Extract season from given date and expose the enemy scout!
* 
* @param {Date | FakeDate} date real or fake date
* @returns {String} time of the year
* 
* @example
* 
* getSeason(new Date(2020, 02, 31)) => 'spring'
* 
*/
function getSeason(date) {
if (date == undefined) { return 'Unable to determine the time of year!' }

if (date instanceof Date == false) {
  throw new Error('Invalid date!');
}

try {
  date.getDate()
  date.getUTCDate()
} catch(e) { throw new Error('Invalid date!'); }

let day = date.getDate()
let month = date.getMonth()
for (season in seasons) {
  let seasonMonthStart = seasons[season].start.month
  let seasonDayStart = seasons[season].start.day
  let seasonMonthEnd = seasons[season].end.month
  let seasonDayEnd = seasons[season].end.day
  if (month < 2 && month <= seasonMonthEnd && day >= seasonDayStart && day <= seasonDayEnd) { return `${season}` }
  if (month >= 11 && day >= seasonDayStart) { console.log(seasonMonthStart, seasonDayStart, seasonMonthEnd, seasonDayEnd); return `${season}` }
  if (month >= seasonMonthStart && month <= seasonMonthEnd && day >= seasonDayStart && day <= seasonDayEnd) {
    return `${season}`
  }
}
}
module.exports = {
  getSeason
};
