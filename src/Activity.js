if(typeof module !== 'undefined') {
  var activityData = require('../data/activityData');
}

class Activity {
  constructor(id) {
    this.id = id;
  }

  getMilesPerDate() {
    // by id
    // get value of key numSteps
    // numSteps x userdata's value for strideLength
    // math is hard
    // divide returned unit (feet?) by 5280
  }

  getActiveMinutes() {
    // by id
    // find value on key date matching mm/dd/yyyy
    // return value for key of minutesActive
  }

  // refactor OR new function using activeMinutes?
  // setting range of dates rather than on e date

  evaluateSteps() {
    // by id
    // reduce over array looking at each key of sleepQuality
    // acc += quality divided by length of the array
    // return acc
    // set acc to a number
  }

  totalHoursPerDate() {
    // by id
    // filter for key of date
    // return value for key of hoursSlept
  }

  // hours per day for the span of 7 days -- I think we could refactor the hours per date to accept condition of one day or a span of days

  qualityPerDate() {
    // by id
    // filter for key of date
    // return value for key of sleepQuality
  }

  // quality per day for a span of 7 days -- same, refactor functionality for quality per day to accept a single date or range
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Activity;
}


// ******** do these live in UserRepo?
// For all users, the average sleep quality
// Find all users who average a sleep quality greater than 3 for a given week(7 days) - you should be able to calculate this for any week, not just the latest week
// For a given day(identified by the date), find the users who slept the most number of hours(one or more if they tied)
// Make a metric of your own! Document it, calculate it, and display it.