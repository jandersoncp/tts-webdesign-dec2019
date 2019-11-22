//Define a function
function saySomething(something) {
	console.log(something);
}


// run function
saySomething('Hello function!'); //logs 'hello function!'</h2>


// function with return value
function add(number1, number2) {
	return number1 + number2;
}

var sum = add(1,2);
console.log(sum); // 3


// function with arguments
function add(a,b) {
	console.log(a,b)
}

add(1); // '1,undefined'
add(1,2,3,4,5) // '1,2'