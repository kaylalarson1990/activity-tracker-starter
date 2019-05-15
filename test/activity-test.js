if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var Activity = require('../src/Activity.js');
  var userData = require('../data/userData');
  var testActivity = require('../data/testActivity');
}

let testUser = {
  "id": 37,
  "name": "Rupert Cartwright",
  "address": "765 Camden Mountains, Homenickhaven ME 37933",
  "email": "Raphael80@hotmail.com",
  "strideLength": 4.9,
  "dailyStepGoal": 10000
}

describe('Activity ', function() {
  let activity;
  beforeEach(function() {
    activity = new Activity(testActivity);
  });

  it('should be a function', function () {
    expect(Activity).to.be.a('function');
  });

  it.skip('should return steps in miles', function() {
    activity.getMilesPerDate(testActivity);
    console.log(activity.getMilesPerDate(testActivity));
    expect(activity.getMilesPerDate()).to.equal();
  });

  it('should should return total active minutes for a week', function() {
    activity.totalMinutesPerWeek(testActivity);
    console.log(activity.totalMilesPerWeek(testActivity));
    expect(activity.totalMinutesPerWeek()).to.equal();
  })
});

