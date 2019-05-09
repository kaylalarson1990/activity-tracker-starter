if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var hydrationData = require('../data/hydrationData');
  var testData = require('../data/testData');
  var User = require('../src/User.js');
}

describe('UserRepository ', function() {
  let hydration;
  beforeEach(function() {
    hydration = new Hydration(testData);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

})