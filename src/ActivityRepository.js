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
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = ActivityRepository;
}