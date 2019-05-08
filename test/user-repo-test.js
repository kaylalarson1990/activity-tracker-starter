const expect = require('chai').expect;
const UserRepository = require('../src/UserRepository.js');
const testData = require('../data/testData');

describe('UserRepository ', function() {
  let userRepo;
  beforeEach(function() {
    const testData = {
    "id": 37,
    "name": "Rupert Cartwright",
    "address": "765 Camden Mountains, Homenickhaven ME 37933",
    "email": "Raphael80@hotmail.com",
    "strideLength": 4.9,
    "dailyStepGoal": 10000
  }
    userRepo = new UserRepository(testData);
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });
});