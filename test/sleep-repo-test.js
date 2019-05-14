if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var SleepRepository = require('../src/SleepRepository.js');
  var Sleep = require('../src/Sleep.js');
  var testData = require('../data/testData');
  var testUserObj = require('../data/testObj');
}

describe('Sleep Repository ', function() {
  let sleepRepo;
  beforeEach(function() {
    sleepRepo = new SleepRepository(testData);
  });

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it.skip('should get a user id', function() {
    expect(sleepRepo.getUserSleep()).to.equal();
  });

  it('should return average sleep quality for all users', function() {
    sleepRepo.avgAllSleep(testData);
    expect(sleepRepo.avgAllSleep()).to.equal('3.02')

  })
});