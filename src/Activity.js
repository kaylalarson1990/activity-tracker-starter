if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  activityData = require('../data/activityData');
  userData = require('../data/userData');
}

class Activity {
  constructor(singleUserActivity) {
    this.singleUserActivity = singleUserActivity;
  }

  getMilesPerDate(day) {
    const targetUserData = userData.find(data => {
      return data.id === this.singleUserActivity.userID;
    });
    const calculateMiles = this.singleUserActivity.activityData.map(day => {
      let math = ((day.numSteps * targetUserData.strideLength) / 5280);
      return Math.round(math);
    });

  }

  compareSteps() {
    const targetData = userData.find(data => {
      return data.id === this.singleUserActivity.userID;
    });

    const numOfSteps = this.singleUserActivity.activityData.map(day => day.numSteps);

    const goalSteps = targetData.dailyStepGoal;

    if(numOfSteps < goalSteps) {
      return false;
    }

  }

  getActiveMinutes(activeDay) {
    return this.singleUserActivity.activityData.find(day => {
      if(day.date === activeDay) {
        return day.minutesActive;
      }
    });
  }

  totalMinutesPerWeek(firstDay) {
    let startInd = this.singleUserActivity.activityData.findIndex(startDay => startDay.date === firstDay);

    let weeklyActivity = this.singleUserActivity.activityData.slice(startInd + 1, startInd - 6);
    
    let weeklyMins = weeklyActivity.reduce((acc, day) => {
        acc += day.minutesActive;
      return acc;
    }, 0);
    return weeklyMins;
  }

}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Activity;
}
