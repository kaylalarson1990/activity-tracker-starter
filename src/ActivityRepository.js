if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  activityData = require('../data/activityData');
  Activity = require('./Activity');
}

class ActivityRepository {
  constructor(userId) {
    this.allActivityData = activityData;
    this.newActivity = new Activity(this.getUserActivity());
  }

  getUserActivity(userId) {
    return this.allActivityData.find(user => user.id === userId);
  }

  avgStairsClimbed() {
    let allUsers = this.allActivityData.reduce((acc, user) => {
      let findDay = user.allActivityData.find(day => day.date === date);
      acc = acc + findDay.flightsOfStairs;
      return acc
    }, 0);
    return allUsers / this.allActivityData.length;
  }

  allActiveMinutesPerDate() {

    
  }


//For all users, what is the average number of:
// stairs climbed for a specified date
// steps taken for a specific date
// minutes active for a specific date

}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = ActivityRepository;
}