if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  hydrationData = require('../data/hydrationData');
  Hydration = require('./Hydration');
}

class HydrationRepository {
  constructor(userId) {
    this.hydroData = hydrationData;
    this.newHydration = new Hydration(this.getUserHydration());
  }

  getUserHydration(userId) {
    return this.hydroData.find(user => user.id === userId);
  }
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = HydrationRepository;
}