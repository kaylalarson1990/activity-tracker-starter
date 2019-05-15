
class Sleep {
  constructor(singleUserSleep) {
    this.singleUserSleep = singleUserSleep;
  }

  avgHoursPerDay() {
    let avgHours = this.singleUserSleep.sleepData.map(dates => dates.hoursSlept);
    return Math.floor(avgHours.reduce((a, b) => a + b) / avgHours.length);
  }

  totalHoursPerWeek(firstDay) {
    let startInd = this.singleUserSleep.sleepData.findIndex(startDay => startDay.date === firstDay);
    let weeklySleep = this.singleUserSleep.sleepData.slice(startInd, startInd + 7).reduce((acc, dates) => {
      acc += dates.hoursSlept;
      return acc;
    }, 0);
    return Math.floor(weeklySleep);
  }

  totalAvgQuality() {
    let avgQual = this.singleUserSleep.sleepData.map(qual => qual.sleepQuality);
    return Math.floor(avgQual.reduce((a, b) => a + b) / avgQual.length);
  }

  totalHoursPerDate(day) {
    let hour = this.singleUserSleep.sleepData.find(dates => {
      if(dates.date === day) {
        return dates.hoursSlept;
      }
    });
    return hour.hoursSlept;
  }

  qualityPerDate(qualDay) {
    let qualityDate = this.singleUserSleep.sleepData.find(dates => {
      if(dates.date === qualDay) {
        return dates.sleepQuality;
      }
    });
    return qualityDate.sleepQuality;
  }
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Sleep;
}