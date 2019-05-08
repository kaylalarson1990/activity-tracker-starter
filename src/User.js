if(typeof module !== 'undefined') {
  var userData = require('../data/userData');
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

if(typeof module !== 'undefined') {
  module.exports = User;
}