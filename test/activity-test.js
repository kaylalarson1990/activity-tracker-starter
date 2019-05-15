if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var Activity = require('../src/Activity.js');
  var ActivityRepository = ('../src/ActivityRepository.js');
  var testUserObj = require('../data/testObj');
}

describe('Activty ', function() {
  let activity;
  beforeEach(function() {
    activity = new Activity(testUserObj);
  });

  it('should be a function', function () {
    expect(Activity).to.be.a('function');
  });

  it('should return steps in miles', function() {
    // activity.getMilesPerDate(testUserObj);
    console.log(activity.getMilesPerDate(testUserObj))
    expect(activity.getMilesPerDate()).to.equal()
  })
});

