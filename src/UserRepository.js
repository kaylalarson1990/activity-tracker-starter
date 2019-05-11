if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  userData = require('../data/userData');
  User = require('./User');
}

class UserRepository {
  constructor() {
    this.allUserData = userData;
    this.newUser = new User(this.makeAUser());
    this.id = this.newUser.id;
  }

  makeAUser() {
    let ourUser = this.allUserData[Math.floor(Math.random() * this.allUserData.length)];
    addUserFirstName(this.newUser.name);
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
