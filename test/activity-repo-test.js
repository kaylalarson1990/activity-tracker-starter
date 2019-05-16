if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var Activity = require('../src/Activity.js');
  var testData = require('../data/testData');
  var ActivityRepository = require('../src/ActivityRepository.js')
}

describe('ActivityRepository', function () {
  let activityRepo;
  beforeEach(function () {
    activityRepo = new ActivityRepository();
  });

  it('should be a function', function() {
    expect(ActivityRepository).to.be.a('function');
  });

  





  });