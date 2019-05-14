if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  userSleepData = require('../data/sleepData');
}

class Sleep {
  constructor(singleUserSleep) {
    this.singleUserSleep = singleUserSleep;
  }

  avgHoursPerDay() {
    let avgHours = this.singleUserSleep.sleepData.map(dates => dates.hoursSlept);
    return Math.floor(avgHours.reduce((a, b) => a + b) / avgHours.length);
  }

  totalHoursPerWeek(firstDay) {
    let startInd = this.singleUserSleep.sleepData.findIndex(startDay => startDay.date === firstDay);
    let weeklySleep = this.singleUserSleep.sleepData.slice(startInd, startInd + 7).reduce((acc, dates) => {
      acc += dates.hoursSlept;
      return acc;
    }, 0);
    return Math.floor(weeklySleep);
  }

  totalAvgQuality() {
    let avgQual = this.singleUserSleep.sleepData.map(qual => qual.sleepQuality);
    return Math.floor(avgQual.reduce((a, b) => a + b) / avgQual.length);
  }

  totalHoursPerDate(day) {
    let hour = this.singleUserSleep.sleepData.find(dates => {
      if(dates.date === day) {
        return dates.hoursSlept;
      }
    });
    return hour.hoursSlept;
  }

  qualityPerDate(qualDay) {
    let qualityDate = this.singleUserSleep.sleepData.find(dates => {
      if(dates.date === qualDay) {
        return dates.sleepQuality;
      }
    });
    return qualityDate.sleepQuality;
  }

// quality per day for a span of 7 days -- same, refactor functionality for quality per day to accept a single date or range

// custom metric!
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Sleep;
}




// ******** do these live in UserRepo?

// For all users, the average sleep quality

// Find all users who average a sleep quality greater than 3 for a given week(7 days) - you should be able to calculate this for any week, not just the latest week

// For a given day(identified by the date), find the users who slept the most number of hours(one or more if they tied)

// Make a metric of your own! Document it, calculate it, and display it.