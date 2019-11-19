var myFirstString = "We're doing it!"; //string
var myFirstNumber = 34; // number 
var myFirstBoolean = false; // boolean - aka true or false

console.log("myFirstNumber first", myFirstNumber);
// changing the number 

myFirstNumber = 15;

console.log("myFirstNumber second", myFirstNumber);

// Equations
var x = 5;
var y = 134;
var z = 57;

var sum1 = x * y;
console.log("sum1", sum1);

var sum2 = (y - (sum1 * z)) / x;
console.log("sum2", sum2);

if (y > x) {
	console.log('y is greater than x');
} else {
	console.log('x is greater than y');
}

// in the case of required form fields
var formX, formY, formZ;
if (formX.value && formY.value && formZ.value) {
	console.log('button is clickable');
} else {
	console.log('Please fill in all the required fields');
}

// Password example
var password = 'x2gxs4f';
if (password.includes('z') || password.includes(4)) {
	console.log('includes z or 4');
} else if (password.includes('z')) {
	console.log('includes z');
} else if (password.includes(4)) {
	console.log('includes 4');
} else {
	console.log('does not include either');
}






