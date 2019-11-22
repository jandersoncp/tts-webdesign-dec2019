//Get a single node
const el = document.getElementById('username');


//Get all inputs - elements by TagName or className
const inputs = document.getElementsByTagName('input');
const inError = document.getElementsByClassName('error');

inputs.length; //2
inError.length; //1


//Get all inputs - querySelector
const firstButton = document.querySelector('button');
const inError = document.querySelectorAll('input.error');

firstButton //single button node
inError //Node list of inputs with class 'error'


// It seems like querySelectorAll should return an Array of elements. In fact, it returns a nodeList, which offers a similar, but not identical API to Array.
const links = document.querySelectorAll('a');
//Works!
const linkCount = links.length;
const firstLink = links[0];

// Traversing the DOM
// Children 
const listItems = document.querySelector('ul').children;
listItems.length; //2

// Sibling and parents
const selectedItem = document.querySelector('li.selected')
const first = selectedItem.previousElementSibling;
const last = selectedItem.nextElementSibling;
const list = selectedItem.parentElement;
const header = selectedItem.parentElement.parentElement;
const section = selectedItem.parentElement.parentElement.nextElementSibling;


// Editing a node
// inner html
const div = document.querySelector('div');
const a = document.querySelector('a');

a.innerHTML; //"click me"
div.innerHTML; //'<a href="#">Click me</a>'

a.innerHTML = "Updated link text";

// attributes
const a = document.querySelector('a');
//Get an attribute
a.href; //"http://google.com"
//Set an attribute
a.name = 'new link name';
//Add a new attribute
a.target = "_blank";

// add and remove
//Remove the first list item
document.querySelector('.first').remove();
// create an li
const newLI = document.createElement('li');
newLI.innerHTML = "Item 2";