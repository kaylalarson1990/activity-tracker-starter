if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var allUserData = require('../data/userData');
  var User = require('./User');
}

class UserRepository {
  constructor(allUserData, id) {
    this.allUserData = allUserData;
    this.newUser = new User(this.makeAUser);
    this.id = id;
  }

  makeAUser () {
    return allUserData.filter(user => user.id === this.id);
  }

  avgGoalSteps() {
    let steps = allUserData.map(a => a.dailyStepGoal);
    let avgStepGoal = Math.floor(steps.reduce((acc, user) => acc + user, 0) / steps.length);
    return avgStepGoal;
  }

  commonState() {
    let findStates = allUserData.map(user => user.address.split(' ')[user.address.split(' ').length - 2]);
    let addStates = findStates.reduce((acc, state) => {
      if(!acc[state]) {
        acc[state] = 1;
      } else {
        acc[state]++;
      }
      return acc;
    }, {});
    let sortStates = Object.entries(addStates).sort((a, b) => a[1] - b[1]).pop()[0];
    return sortStates;
    }
  }

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = UserRepository;
}
