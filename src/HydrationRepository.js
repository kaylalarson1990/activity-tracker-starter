if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  hydrationData = require('../data/hydrationData');
  Hydration = require('./Hydration');
}

class HydrationRepository {
  constructor(id) {
    this.id = id;
    this.newHydration = new Hydration(this.getUserHydration());
  }

  getUserHydration() {
    return hydrationData.find(user => user.userID === this.id);
  }
}


if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = HydrationRepository;
}