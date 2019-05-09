if(typeof module !== 'undefined') {
  var userData = require('../data/userData');
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
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = User;
}

//git commit -m "Add users test and user js methods
// > 
// > 
// > co-authored-by: Hannah Hyde <hannahhyde@gmail.com>"