if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var Activity = require('../src/Activity.js');
  var userData = require('../data/userData');
  var singleActivity = require('../data/singleActivity')
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
    activity = new Activity(singleActivity);
  });

  it('should be a function', function () {
    expect(Activity).to.be.a('function');
  });

  it('should return steps in miles', function() {
    activity.getMilesPerDate("06/05/2019")
    expect(activity.getMilesPerDate()).to.equal();
  });

  it('should should return total active minutes for a week', function() {
    let activity = new Activity(singleActivity)
    activity.totalMinutesPerWeek("06/05/2019");
    expect(activity.totalMinutesPerWeek()).to.equal(367);
  })
});

