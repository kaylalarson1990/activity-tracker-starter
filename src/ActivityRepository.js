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
    let allUsers = this.allActivityData.map(user => user.activityData).map(user => user.map(date => date.flightsOfStairs)).map(user => {
      return user.reduce((acc, specificDate) => {
        acc += (specificDate / 100);
        return acc;
      }, 0);
    }).reduce((acc, avg) => {
      acc += avg;
      return acc;
    }, 0);
    return (Math.round(allUsers / 50));
  }

  avgUserSteps(startDate) {
   let usersSteps = this.allActivityData.map(user => user.activityData);
   let allSteps = [];

    usersSteps.map(user =>
        user.filter(user => {
        if(user.date === startDate) {
        allSteps.push(user.numSteps);
        }
    }));

   let result = allSteps.reduce((acc, avg) => {
    return Math.round((acc += avg) / allSteps.length);
   });

   return result;

  }

  allActiveMinutesPerDate(day) {
    let usersActivity = this.allActivityData.map(user => user.activityData);
    let allMins = [];

    usersActivity.map(user =>
        user.filter(user => {
        if(user.date === startDate) {
        allMins.push(user.minutesActive);
        }
    }));

   let result = allMins.reduce((acc, avg) => {
    return Math.round((acc += avg) / allMins.length);
   });

   return result;

    
  }


//For all users, what is the average number of:
// stairs climbed for a specified date
// steps taken for a specific date
// minutes active for a specific date

}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = ActivityRepository;
}