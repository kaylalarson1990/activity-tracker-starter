if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  userData = require('../data/userData');
}

class User {
  constructor(singleUserData) {
    this.singleUserData = singleUserData;
  }

  returnName() {
    return this.singleUserData.name.split(' ')[0];
  }
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = User;
}