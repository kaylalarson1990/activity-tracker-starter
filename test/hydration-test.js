if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var Hydration = require('../src/Hydration.js')
  var testHydration = require('../data/testHydration');
  singleHydration = require('../data/singleHydration')
  // var User = require('../src/User.js');
}

describe('Hydration ', function() {
  let hydration;
  beforeEach(function() {
    const testHydro = {
    "userID": 37,
    "hydrationData": [
      {
        "date": "06/05/2019",
        "numOunces": 47
      }
    ]
  }
    hydration = new Hydration(testHydro);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should find ounces of water for one date', function() {
    expect(hydration.ouncesPerDate("06/05/2019")).to.equal(47);
  });

  it('should find ounces of water for one week', function() {
    let hydration = new Hydration(singleHydration)
    hydration.ouncesPerWeek("06/05/2019");
    expect(hydration.ouncesPerWeek()).to.equal(129);
  });

});