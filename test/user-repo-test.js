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

  it('should make a new user', function () {
    let user = new User(userRepo.makeAUser);
    expect(user).to.be.an.instanceOf(User);
  });


  it('should average all users goal steps', function() {
    let steps = userRepo.avgGoalSteps();
    expect(steps).to.equal(6960);
  })

  it('should find the most common state', function() {
    let state = userRepo.commonState();
    expect(state).to.equal("NM");
  });
});