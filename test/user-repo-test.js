const expect = require('chai').expect;
const UserRepository = require('../src/UserRepository.js');
const testData = require('../data/testData');

describe('UserRepository ', function() {
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
});