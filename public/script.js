const text = window.document.getElementById('SignUp');
console.log(text);

const NewGameButton = window.document.getElementById('StartGame');
const SignUpButton = window.document.getElementById('SignUp');
const SignInButton = window.document.getElementById('SignIn');
const RatingTable = window.document.getElementById('RatingTable');

NewGameButton.addEventListener('click', () => {
	document.location.href = './GameSettings.html';
});

SignUpButton.addEventListener('click', () => {
	document.location.href = './SignUp.html';
});

SignInButton.addEventListener('click', () => {
	document.location.href = './SignIn.html';
});

RatingTable.addEventListener('click', () => {
	document.location.href = './ratingTabel.html';
});