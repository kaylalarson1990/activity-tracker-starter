if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  userData = require('../data/userData');
  User = require('./User');
}

class UserRepository {
  constructor(userId) {
    this.allUserData = userData;
    this.newUser = new User(this.makeAUser(userId));
  }

  makeAUser(userId) {
    return this.allUserData.find(user => user.id === userId);
  }

  avgGoalSteps() {
    let steps = this.allUserData.map(a => a.dailyStepGoal);
    let avgStepGoal = Math.floor(steps.reduce((acc, user) => acc + user, 0) / steps.length);
    return avgStepGoal;
  }

  commonState() {
    let findStates = this.allUserData.map(user => user.address.split(' ')[user.address.split(' ').length - 2]);
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

  returnFullName(id) {
  if (id === this.allUserDatafind(user => user.id === id))
      return this.allUserData.name
      // that parameter will have to accept and operate on an array in the event two users tie for most sleep, etc
  }

}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = UserRepository;
}
