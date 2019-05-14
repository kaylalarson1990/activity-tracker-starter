$(document).ready(() => {
    loadUserDashboard();

  function loadUserDashboard() {
    let singleUserId = randomUser();
    const userRepo = new UserRepository(singleUserId);
    const hydroRepo = new HydrationRepository(singleUserId);
    const sleepRepo = new SleepRepository(singleUserId);
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

$('#populate').click(function(){
  const userInput = $('#num-ounces');
  const numOunces = parseInt(userInput.val());
  const goalInput = $('#goal-ounces').val()
  
  makeCircle(numOunces, goalInput)
});

const waterPercentage = (ounces, goal) => parseFloat(ounces / goal * 100).toFixed(2)

const determineColor = percentage => {
  if (percentage < 50) {
    return 'red'
  } else if (percentage < 80) {
    return 'orange'
  } else {
    return 'green'
  }
}

// function makeCircle(ounces, goal) {
//   $('#user-water').html(`<div class="single-chart">
//     <svg viewBox="0 0 36 36" class="circular-chart ${determineColor(waterPercentage(ounces, goal))}">
//       <path class="circle-bg"
//         d="M18 2.0845
//           a 15.9155 15.9155 0 0 1 0 31.831
//           a 15.9155 15.9155 0 0 1 0 -31.831"
//       />
//       <path class="circle"
//         stroke-dasharray="${waterPercentage(ounces, goal)}, 100"
//         d="M18 2.0845
//           a 15.9155 15.9155 0 0 1 0 31.831
//           a 15.9155 15.9155 0 0 1 0 -31.831"
//       />
//       <text x="18" y="20.35" class="percentage">${waterPercentage(ounces, goal)}%</text>
//     </svg>
//     <p>You have drank ${ounces} oz's out of your goal of ${goal}</p>
//     <p>You Are ${waterPercentage(ounces, goal)}% of the way to your Goal!</p>
//   </div>`)
// }

