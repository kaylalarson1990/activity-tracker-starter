 if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  sleepData = require('../data/sleepData');
  Sleep = require('./Sleep');
}

class SleepRepository {
  constructor(singleUserId){
    this.allSleepData = sleepData;
    this.newSleep = new Sleep(this.getUserSleep());
  }

  getUserSleep(singleUserId) {
    return this.allSleepData.find(user => user.id === singleUserId);
  }
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SleepRepository;
}