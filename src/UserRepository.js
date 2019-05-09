if(typeof module !== 'undefined') {
  var allUserData = require('../data/userData');
  var User = require('./User');
}

class UserRepository {
  constructor(allUserData) {
    this.allUserData = allUserData;
    this.newUser = new User(this.makeAUser);
  }

  makeAUser () {
    return allUserData.filter(user => user.id === 37);
  }

  avgGoalSteps() {
    let steps = allUserData.map(a => a.dailyStepGoal);
    let avgStepGoal = Math.floor(steps.reduce((acc, user) => acc + user, 0) / steps.length);
    return avgStepGoal;
  }

  commonState() {
    // addresses = original array map to return just addresses
    // split addresses at each words
    // states = reduce over addresses acc, state 
    // syntax for getting each at index words.length - 1, []
    // over states, sort then filter then pop
  }
}

if(typeof module !== 'undefined') {
  module.exports = UserRepository;
}
