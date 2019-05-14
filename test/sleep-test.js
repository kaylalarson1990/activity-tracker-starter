if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var Sleep = require('../src/Sleep.js');
  var testData = require('../data/testObj');
}

describe('Sleep ', function() {
  let sleep;
  beforeEach(function() {
    sleep = new Sleep(testData);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should find hours slept', function() {
    const testDate = "06/05/2019"
    sleep.totalHoursPerDate(testDate);
    expect(sleep.totalHoursPerDate(testDate)).to.equal(6.8);
  });

  it('should calculate avg hours slept', function() {
    sleep.avgHoursPerDay();
    expect(sleep.avgHoursPerDay()).to.equal(7);
  });
});