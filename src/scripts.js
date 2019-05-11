if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  UserRepository = require('./UserRepository')
}

let changeUserName = document.querySelector("#user-name");
let activeMinPer = document.querySelector(".active-minutes");
let sleepHoursPer = document.querySelector(".sleep-hours");
let totalStepsPer = document.querySelector(".total-steps");
let toggleUserInfo = document.querySelector(".toggle-user-info");
let fullName = document.querySelector("#name");
let address = document.querySelector("#address");
let email = document.querySelector("#email");
$(document).ready(() => {
  loadUserRepo();
})

function loadUserRepo() {
  let userRepo = new UserRepository();
  console.log('new userrepo: ', userRepo);
}

function addUserFirstName(user) {
  $("#user-name").text()
}


