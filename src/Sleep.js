if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  userSleepData = require('../data/sleepData');
}

class Sleep {
  constructor(singleUserSleep) {
    this.singleUserSleep = singleUserSleep;
    console.log('sleep', this.singleUserSleep)
    
  }

  avgHoursPerDay() {
    let avgHours = this.singleUserSleep.sleepData.reduce((acc, dates) => {
        acc += dates.hoursSlept / sleepData.length;
      return acc;
    }, 0);
    return Math.floor(avgHours);
  }

  totalAvgQuality() {
    // by id
    // reduce over array looking at each key of sleepQuality
    // acc += quality divided by length of the array
    // return acc
    // set acc to a number
  }

  totalHoursPerDate(day) {
    let hour = this.singleUserSleep.sleepData.find(dates => {
      if(dates.date === day) {
        return dates.hoursSlept;
      }
    });
    return hour.hoursSlept;
  }

// hours per day for the span of 7 days -- I think we could refactor the hours per date to accept condition of one day or a span of days

  qualityPerDate() {
    // by id
    // filter for key of date
    // return value for key of sleepQuality
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