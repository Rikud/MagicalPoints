const text = window.document.getElementById('text');
console.log(text);

const button = window.document.getElementById('button');

button.addEventListener('click', () => {
	text.innerText = 'Welcome to Frontend';
})