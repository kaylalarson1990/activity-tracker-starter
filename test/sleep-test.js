if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var Sleep = require('../src/Sleep.js');
  var testSleep = require('../data/testSleep');
  User = require('../src/User.js')
}

describe('Sleep ', function() {
  let sleep;
  beforeEach(function() {
    const testData = {
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

  it.only('should find hours slept', function() {
    // sleep.totalHoursPerDate(testDate);
    expect(sleep.totalHoursPerDate()).to.equal(6.8);
  });

  it('should calculate avg hours slept', function() {
    sleep.avgHoursPerDay();
    expect(sleep.avgHoursPerDay()).to.equal(7);
  });

  it('should find total hours for a week', function() {
    const testDate = "06/05/2019"
    sleep.totalHoursPerWeek(testDate);
    expect(sleep.totalHoursPerWeek(testDate)).to.equal(55);
  });

  it('should calculate avg sleep quality', function() {
    sleep.totalAvgQuality();
    expect(sleep.totalAvgQuality()).to.equal(3);
  });

  it('should find quality by date', function() {
    const testDate = "06/05/2019";
    sleep.qualityPerDate(testDate);
    expect(sleep.qualityPerDate(testDate)).to.equal(4.2);
  })
});