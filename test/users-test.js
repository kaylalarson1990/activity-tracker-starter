if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var User = require('../src/User.js');
  var testData = require('../data/testObj');
}

describe('User information', function() {
  let user;
  beforeEach(function() {
    const testData = {
    "id": 37,
    "name": "Rupert Cartwright",
    "address": "765 Camden Mountains, Homenickhaven ME 37933",
    "email": "Raphael80@hotmail.com",
    "strideLength": 4.9,
    "dailyStepGoal": 10000
  }
    user = new User(testData);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should make a new user', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it.skip('should have a name', function() {
    expect(user.name).to.equal('Rupert Cartwright');
  });

  it('should return users first name', function() {
    expect(user.returnName()).to.equal('Rupert');
  });
});