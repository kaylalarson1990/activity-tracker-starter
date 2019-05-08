const allUserData = require('../data');

class UserRepository {
  constructor(dataFilepath) {
    this.allUserData = allUserData;
  }

  returnName() {
    // filter over array to find the object containing the key id
    // match value to user id value
  }

  avgGoalSteps() {
    // reduce over array looking at obj key dailyStepGoal
    // acc += goal
    // return acc
    // accumulator should be a number aka set to 0
  }

  commonState() {
    // object.keys(address).map returning each address
    // split? how do we grab just state
  }
}
module.exports = UserRepository;