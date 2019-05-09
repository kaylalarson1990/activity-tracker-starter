if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var Hydration = require('../src/Hydration.js')
  var hydrationData = require('../data/hydrationData');
  var testData = require('../data/testData');
  var User = require('../src/User.js');
}

describe('Hydration ', function() {
  let hydration;
  beforeEach(function() {
    hydration = new Hydration(testData);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

})