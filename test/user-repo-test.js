if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var expect = require('chai').expect;
  var UserRepository = require('../src/UserRepository.js');
  var testData = require('../data/testData');
  var User = require('../src/User.js');
}


describe('UserRepository', function() {
  let userRepo;
  beforeEach(function() {
    userRepo = new UserRepository(testData);
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  // it('should make a new user', function () {
  //   let user = new User(userRepo.makeAUser);
  //   expect(user).to.be.an.instanceOf(User);
  // });

  it('should find a user id', function () {
    const testData = {
    "id": 37,
    "name": "Rupert Cartwright",
    "address": "765 Camden Mountains, Homenickhaven ME 37933",
    "email": "Raphael80@hotmail.com",
    "strideLength": 4.9,
    "dailyStepGoal": 10000
  }
    let user = new User(testData);
    userRepo.makeAUser();
    expect(user.id).to.equal(37);
  })

  it('should average all users goal steps', function() {
    let steps = userRepo.avgGoalSteps();
    expect(steps).to.equal(6960);
  })

  it('should find the most common state', function() {
    let state = userRepo.commonState();
    expect(state).to.equal("NM");
  });
});