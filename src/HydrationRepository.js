if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var hydrationTestData = require('../data/hydrationData');
  var Hydration = require('./Hydration');
}

class HydrationRepository {
  constructor(id) {
    this.id = id;
    this.newHydration = new Hydration(this.getUserHydration);
  }

  getUserHydration() {
    return hydrationData.filter(user => hydrationData.userID === this.id);
    //hydrationData.userID find -> userID ==== this.id, then return that user hydration info
  }
}


if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = HydrationRepository;
}