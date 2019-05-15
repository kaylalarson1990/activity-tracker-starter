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

weeklyUserSleepQual (day) {
  let ids = [];
  let highQual = [];

  let index = allSleepData.map(user => {
    return user.sleepData.findIndex(night => {
      return night.date === day;
    });
  });

  let final = allSleepData.map(user => {
    return user.sleepData.slice(index[0] + 1, index[0] - 6)
  }).map(user => {
    return user.map(night => {
   return night.sleepQuality;
    });
  }).map(user => {
   return user.reduce((acc, qual) => {
     acc += qual;
     return acc;
     }, 0)
   }).forEach((qual, i) => {
    if(qual >= 3) {
      highQual.push([qual, ids[i]]);
    }
  });
  return final;
  }

  findMaxHours (day) {
    let ids = [];
    let bestSleepers = [];

    // let allUsersSleep = testAllSleep.map(user => {
    //   ids.push(user.userID);
    //   return user.sleepData;
    // });

    let findDate = testAllSleep.map(user => {
      return user.sleepData.filter(night => {
        if(night.date === day) {
          return night;
        }
      }); 
    });

    let findHours = findDate.map(allNights => {
      return allNights.map(hours => {
        return hours.hoursSlept;
      })
    })

   let highestHour = findDate.map(user => {
     return user.forEach((hours, i) => {
       if(hours.hoursSlept === Math.max(...findHours)) {
         bestSleepers.push([hours, ids[i]]);
       }
     });
     return highestHour;
   });
  }

};

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SleepRepository;
}