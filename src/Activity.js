if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  // activityData = require('../data/activityData');
  userData = require('../data/userData');
  testActivity = require('../data/testActivity')
}

class Activity {
  constructor(singleUserActivity) {
    this.singleUserActivity = singleUserActivity;
  }

  getMilesPerDate() {
    const targetUserData = userData.find(data => {
      return data.id === this.singleUserActivity.userID;
    });
    // console.log(targetUserData)
    return this.singleUserActivity.activityData.map(day => {
      return Math.round((day.numSteps * targetUserData.strideLength) / 5280);
    });
  }

  getActiveMinutes(activeDay) {
    return this.singleUserActivity.activityData.find(day => {
      if(day.date === activeDay) {
        return day.minutesActive;
      }
    });
  }

  totalMinutesPerWeek(firstDay) {
    console.log(this.singleUserActivity)
    let startInd = this.singleUserActivity.activityData.findIndex(startDay => startDay.date === firstDay);
    console.log(startInd)

    let weeklyActivity = this.singleUserActivity.activityData.slice(startInd +1, startInd -6);
    

    let weeklyMins = weeklyActivity.reduce((acc, day) => {
        acc += day.minutesActive;
      return acc;
    }, 0);
    return weeklyMins;
  }

  evaluateSteps() {
    // by id
  }


}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Activity;
}

// const act = new Activity(activityData[0]);
// act.getMilesPerDate(1)

// console.log('Expected: ', Math.round((7368 * 4.7) / 5280));
