if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  hydrationData = require('../data/hydrationData');
}

class Hydration {
  constructor(hydroData) {
    this.hydroData = hydroData;
  }

  ouncesPerDate(day) {
    let hydroDate = this.hydroData.hydrationData.find(dates => {
      if(dates.date === day) {
        return dates.numOunces;
      } 
    });
    return hydroDate.numOunces;
  }

  ouncesPerWeek(firstDay) {
    let startIndex = this.hydroData.hydrationData.findIndex(startDay => startDay.date === firstDay);
    return this.hydroData.hydrationData.slice(startIndex, startIndex + 7).reduce((acc, dates) => {
          acc += dates.numOunces;
      return acc;
    }, 0);
  }
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Hydration;
}
