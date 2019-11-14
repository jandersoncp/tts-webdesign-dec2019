// Variable declaration
// Variables are used to store values

// to declare, do the following
var myFirstNumber = 1; // number type variable
var myFirstString = 'Hello'; // string type variable
var myFirstBoolean = true; // boolean type variable (true or false)

// you only have to "declare" the var once
// to change the variable values after you declare them, just set them equal to the new value
myFirstNumber = 5;
myFirstString = 'Goodbye';
myFirstBoolean = false;

// BUT BE CAREFUL MIXING TYPES! 
var a = "1";
var b = 1;

b + a; 	//"11" - adding a string and a number creates a string
a + b; 	//"11"

b + b + a; 	//"21" - adding two numbers creates a number, then adding a string creates a string
a + b + b; 	//"111" - starts with a string, then stays a string

// Equations
// +  
// -
// /
// *
// % - modulus. Returns the division remainder.
var y = 5 % 2; // x will equal 1. 2 goes into 5 cleanly twice, with a remainer of 1


// Order of operations
// JavaScript follows the same order of operations you learned when you were younger!
var x = (a * b) + ((b - b) + (a / b));


// Comparison operators
10 < 6		// false
10 > 6		// true
10 <= 45	// true
10 >= 10	// true
10 == 6		// false
10 == "10"	// true
10 === "10"	// false
10 != 6		// true
10 != "10"	// false
10 !== "10"	// true

// We can use our console to debug and log the results of our comparisons
console.log(x);