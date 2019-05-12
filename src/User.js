if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  // userData = require('../data/userData');
   HydrationRepository = require('../src/HydrationRepository')
   // SleepRepository = require('../src/SleepRepository');
   // ActivityRepository = require('../src/ActivityRepository');
}

class User {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.newHydrationRepo = new HydrationRepository(this.id);
    // this.newActivityRepo = new ActivityRepository(this.id);
    // this.newSleepRepo = new SleepRepository(this.id);
    this.name = userData.name;
  }

  returnName() {
    return this.name.split(' ')[0];
  }

  }

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = User;
}

//git commit -m "Add users test and user js methods
// > 
// > 
// > co-authored-by: Hannah Hyde <hannahhyde@gmail.com>"