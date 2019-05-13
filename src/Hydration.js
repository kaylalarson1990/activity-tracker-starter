// if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  
// }

class Hydration {
  constructor(hydroData) {
    this.hydroData = hydroData;
    console.log('hydro', hydroData);
    // this.id = hydroData.userID;
    // this.dailyOunces = 0;
    this.weeklyOunces = 0;
  }

  ouncesPerDate(day) {
    return this.hydroData.hydrationData.find(dates => {
      if(dates.date == day) {
        return dates.numOunces;
      } 
    });
  }

  ouncesPerWeek(firstDay) {
    let startIndex = this.hydroData.hydrationData.findIndex(startDay => startDay.date === firstDay)
    return this.weeklyOunces = this.hydroData.hydrationData.slice(startIndex, startIndex + 7).reduce((acc, dates) => {
          acc += dates.numOunces;
      return acc;
    }, 0);
  }
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Hydration;
}
