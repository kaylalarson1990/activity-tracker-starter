$(document).ready(() => {
  let singleUserId = randomUser();
  const userRepo = new UserRepository(singleUserId);
  const hydroRepo = new HydrationRepository(singleUserId);
  const sleepRepo = new SleepRepository(singleUserId);
    loadUserDashboard();

  function loadUserDashboard() {
    $('#info-arrow').click(function () {
      $('.user-info-card').toggle();
    });
    
    $('#user-name').text(userRepo.newUser.returnName());
    $('#name').text(userRepo.newUser.singleUserData.name);
    $('#address').text(userRepo.newUser.singleUserData.address);
    $('#email').text(userRepo.newUser.singleUserData.email);
    $('#user-step-goal').text(userRepo.newUser.singleUserData.dailyStepGoal);
    $('#avg-step-goal').text(userRepo.avgGoalSteps());
    $('#h20-intake').text(hydroRepo.newHydration.ouncesPerDate('07/05/2019'));
    $('#weekly-h20-intake').text(hydroRepo.newHydration.ouncesPerWeek('07/05/2019'));
    $('#avg-daily-sleep').text(sleepRepo.newSleep.avgHoursPerDay());
    $('#avg-total-sleep').text(sleepRepo.newSleep.totalHoursPerDate('07/05/2019'));
    $('#weekly-sleep').text(sleepRepo.newSleep.totalHoursPerWeek('07/05/2019'));
  };

  function randomUser() {
    return Math.floor((Math.random() * 50) + 1);
  } 
});

