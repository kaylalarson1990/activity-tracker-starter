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
    let allTheSleep = this.allSleepData.map(user => user.sleepData).map(user => user.map(date => date.sleepQuality)).map(user => {
      return user.reduce((acc, night) => {
        acc += (night / 100);
        return acc;
      }, 0);
    }).reduce((acc, avg) => {
      acc += avg;
      return acc;
    }, 0);
    return (allTheSleep / 50).toFixed(2);
  };
// ^^^returns avg as string, do we need it as a num? test is passing for string

//function for index
//let index = allSleepData.map(return user => user.sleepData).findIndex(night => return night.date === date)

//function for finding a week with index
//let findWeek = this.allSleepData.map(user => user.sleepData.slice(index[0] + 1, index[0] - 6))

//findWeek.map(user => return user.sleepData).map(night => return night.sleepQuality)


//let letAllAvg = allQualWeeks.map(user => {
  // user.reduce((acc, qual) => {
    // acc += qual;
    // return acc;
  // }, 0)
// })

//letAllAvg.forEach((qual, i) =>
//{
  //if(qual >= 3) {
//     highQual.push([qual, ids[i]]);
//   }
// })

function weeklyUserSleepQual (day) {
  let ids = [];
  let highQual = [];

  let index = testAllSleep.map(user => {
    return user.sleepData.findIndex(night => {
      return night.date === day;
    });
  });

  let findWeek = testAllSleep.map(user => {
    return user.sleepData.slice(index[0] + 1, index[0] - 6)
  });

  let allQualWeeks = findWeek.map(user => {
    return user.map(night => {
   return night.sleepQuality;
    });
  });

  let letAllAvg = allQualWeeks.map(user => {
   return user.reduce((acc, qual) => {
     acc += qual;
     return acc;
     }, 0)
   })

  let final = letAllAvg.forEach((qual, i) =>
  {
    if(qual >= 3) {
      highQual.push([qual, ids[i]]);
    }
  });
  return final;
  }
};

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SleepRepository;
}