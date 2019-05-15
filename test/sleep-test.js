if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  // var SleepRepository = require('../src/SleepRepository.js');
  var Sleep = require('../src/Sleep.js');
  // var testData = require('../data/testData');
  // var TestSleep = require('../data/testSleep');
  // User = require('../src/User.js')
}

describe('Sleep ', function() {
  let sleep;
  beforeEach(function() {
    const testSleep = {
    "userID": 37,
    "sleepData": [
      {
        "date": "06/05/2019",
        "hoursSlept": 6.8,
        "sleepQuality": 4.2
      }
    ]
  }
    sleep = new Sleep(testSleep);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should find hours slept', function() {
    expect(sleep.totalHoursPerDate("06/05/2019")).to.equal(6.8);
  });

  it('should calculate avg hours slept', function() {
    sleep.avgHoursPerDay();
    expect(sleep.avgHoursPerDay()).to.equal(6);
  });

  it('should find total hours for a week', function() {
    sleep.totalHoursPerWeek();
    expect(sleep.totalHoursPerWeek()).to.equal(6);
  });

  it('should calculate avg sleep quality', function() {
    sleep.totalAvgQuality();
    expect(sleep.totalAvgQuality()).to.equal(4);
  });

  it('should find quality by date', function() {
    expect(sleep.qualityPerDate("06/05/2019")).to.equal(4.2);
  })
});