const expect = require('chai').expect;
const User = require('../src/User.js');
const testData = require('../data/testData');

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

  it('should have an id', function() {
    expect(user.id).to.equal(37);
  })

  it('should have a name', function() {
    expect(user.name).to.equal('Rupert Cartwright');
  });

  it('should return users first name', function() {
    expect(user.returnName()).to.equal('Rupert');
  });
});