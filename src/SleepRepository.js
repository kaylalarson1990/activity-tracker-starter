 if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  sleepData = require('../data/sleepData');
  Sleep = require('./Sleep');
}

class SleepRepository {
  constructor(){
    this.allSleepData = sleepData;
    this.newSleep = new Sleep(this.getUserSleep());
  }

  getUserSleep(singleUserId) {
    return this.allSleepData.find(user => user.id === singleUserId);
  }

  avgAllSleep() {
    let allTheSleep = this.allSleepData.map(user => user.sleepData);
      // refactor opportunity!!! //

    let allTheNights = allTheSleep.map(user => user.map(date => date.sleepQuality));

    let totalQual = allTheNights.map(user => {
      return user.reduce((acc, night) => {
        acc += (night / 100);
        return acc;
      }, 0);
    });

    let finalAvgQual = totalQual.reduce((acc, avg) => {
      acc += avg;
      return acc;
    }, 0);
    
    return (finalAvgQual / 50).toFixed(2);
  };
// ^^^returns avg as string, do we need it as a num? test is passing for string


};

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SleepRepository;
}