if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var Hydration = require('../src/Hydration.js')
  var testObj = require('../data/testObj');
  var User = require('../src/User.js');
}

describe('Hydration ', function() {
  let hydration;
  beforeEach(function() {
    hydration = new Hydration(testObj);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it.skip('should find ounces of water for one date', function() {
    const testDate = "06/05/2019";
    hydration.ouncesPerDate(testDate);
    console.log(hydration.numOunces)
    expect(hydration.numOunces).to.equal(47);
  });

  it.skip('should find ounces of water for one week', function() {
    const firstDate = "06/05/2019";
    hydration.ouncesPerWeek(firstDate);
    expect(hydration.ouncesPerWeek(firstDate)).to.equal(326);
  });

});