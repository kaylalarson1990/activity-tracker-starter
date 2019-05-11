if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var userTestData = require('../data/userData');
  var hydrationRepo = require('../src/HydrationRepository')
}

class User {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.name = userData.name;
  }

  returnName() {
    return this.name.split(' ')[0];
  }

  getHydration() {
    hydrationRepo = new HydrationRepository(this.id);
  }
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = User;
}

//git commit -m "Add users test and user js methods
// > 
// > 
// > co-authored-by: Hannah Hyde <hannahhyde@gmail.com>"