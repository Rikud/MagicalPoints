const startButton = window.document.getElementById('start');
const leaveButton = window.document.getElementById('leave');

startButton.addEventListener('click', () => {
	document.location.href = './game.html';
});

leaveButton.addEventListener('click', () => {
	document.location.href = './index.html';
});