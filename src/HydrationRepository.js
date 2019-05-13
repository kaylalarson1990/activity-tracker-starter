if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  hydrationData = require('../data/hydrationData');
  Hydration = require('./Hydration');
}

class HydrationRepository {
  constructor(singleUserId) {
    this.hydroData = hydrationData;
    this.newHydration = new Hydration(this.getUserHydration());
  }

  getUserHydration(singleUserId) {
    return this.hydroData.find(user => user.id === singleUserId);
  }
}


if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = HydrationRepository;
}