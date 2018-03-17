const newGameButton = document.getElementsByClassName('menu__start-game-button')[0];
const registrationButton = document.getElementsByClassName('menu__registration-button')[0];
const loginButton = document.getElementsByClassName('menu__login-button')[0];
const ratingTable = document.getElementsByClassName('menu__rating-table-button')[0];
const about = document.getElementsByClassName('menu__about-us-button')[0];
const settings = document.getElementsByClassName('menu_setting-button')[0];

newGameButton.addEventListener('click', () => {
	document.location.href = '../settings/gameSettings.html';
});

registrationButton.addEventListener('click', () => {
	document.location.href = '../registration/registration.html';
});

loginButton.addEventListener('click', () => {
	document.location.href = '../login/login.html';
});

ratingTable.addEventListener('click', () => {
	document.location.href = '../ratingTable/ratingTable.html';
});

about.addEventListener('click', () => {
  document.location.href = '../about/about.html';
});

settings.addEventListener('click', () => {
  document.location.href = '../settings/gameSettings.html';
});