// Variables
var x = 1; // number
var y = "2"; // string 
var z = true; // boolean


// Loose typing
// variables are declared with var, but have a type that can be changedvar 
z = 1;
z = 'abc'; //would throw an error in strong typed languages
typeof z //string
z = 1
typeof z //number


// Coersion
// variable type is coerced to a type that makes sense when reached
7 + 7 + 7; // = 21

// First two 7's are calculated... then concatened into a string. 
// returning a string value
7 + 7 + "7"; // = "147"

// The entire expression is implicitly converted into a string and concatenated 
"7" + 7 + 7; // = "777"


// Loose Equality
// The double equals == tries to ignore the type when comparing.
// The triple equals === takes into account type. 
//These are called loose and strict equality checks. You pretty much always want to use strict.
var x = 10;
//Type coersion is happening here!
if(x == '10') {
	console.log(true); //true
}

if(x === '10') {
	console.log(true); //false
}

//Comparison Operators
<
>
<=
>=
==
===
!=
!==
!!

&& // and
|| // or

// if else loop
if (condition) {
	// something happens
} else {
	// something else happens
}


// Concatentation
var one = 'We ';
var two = 'are ';
var three = 'concatenating using';
var four = ' strings!';

console.log(one + two + three + four + ' This is easy!');