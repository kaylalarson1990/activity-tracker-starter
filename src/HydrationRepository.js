if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  hydrationData = require('../data/hydrationData');
  Hydration = require('./Hydration');
}

class HydrationRepository {
  constructor(singleUserId) {
    this.hydroData = hydrationData;
    console.log(this.hydroData);
    this.newHydration = new Hydration(this.getUserHydration());
    // this.id = this.newHydration.userID;
  }

  getUserHydration(singleUserId) {
    return this.hydroData.find(user => user.userID === singleUserId);
  }
}


if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = HydrationRepository;
}