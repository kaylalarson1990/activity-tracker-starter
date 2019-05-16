if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var Hydration = require('../src/Hydration.js');
  var testData = require('../data/testData');
  var HydrationRepository = require('../src/HydrationRepository.js')
}

describe('HydrationRepository', function() {
  let hydrationRepo;
  beforeEach(function() {
    hydrationRepo = new HydrationRepository(37);
  });

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it.skip('should find an id', function() {
    const testID = 37;
    hydrationRepo.getUserHydration(37);
    // console.log(hydrationRepo.userId)
    expect(hydrationRepo.userID).to.equal(37);
  });

});