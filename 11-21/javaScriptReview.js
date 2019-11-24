// Functions
function sayHello(phraseToPrint) {
	console.log(phraseToPrint);
}
sayHello('hello!');

function add(a,b) {
	console.log(a,b)
}
add(1, 2);

function returnValue(value) {
	return value + 1;
}
var valueReturned = returnValue(5);
console.log(valueReturned);

// The DOM
const el = document.getElementById('username');
const inputs = document.getElementsByTagName('input');
const inError = document.getElementsByClassName('error');
const firstButton = document.querySelector('#buttonElement');
const inError = document.querySelectorAll('input.error');
const selectedItem = document.querySelector('li.selected')
const first = selectedItem.previousElementSibling;
const last = selectedItem.nextElementSibling;
const list = selectedItem.parentElement;

selectedItem.innerHTML = 'It changed!';

