if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  UserRepository = require('./UserRepository');
  User = require('./User');
}

// let changeUserName = document.querySelector("#user-name");
// let activeMinPer = document.querySelector(".active-minutes");
// let sleepHoursPer = document.querySelector(".sleep-hours");
// let totalStepsPer = document.querySelector(".total-steps");
// let toggleUserInfo = document.querySelector(".toggle-user-info");
// let fullName = document.querySelector("#name");
// let address = document.querySelector("#address");
// let email = document.querySelector("#email");

$(document).ready(() => {
  const userRepo = new UserRepository();
    console.log('new userrepo: ', userRepo);
    loadUserData();

  function loadUserData(user) {
    $('#info-arrow').click(function () {
      $('.user-info-card').toggle();
    });
    
    $('#user-name').text(userRepo.newUser.returnName());
    $('#name').text(userRepo.newUser.name);
    $('#address').text(userRepo.newUser.userData.address);
    $('#email').text(userRepo.newUser.userData.email);
    $('#user-step-goal').text(userRepo.newUser.userData.dailyStepGoal);
    $('#avg-step-goal').text(userRepo.avgGoalSteps());
  };

  
});

