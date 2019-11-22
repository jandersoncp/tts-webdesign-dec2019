// Step 1: Create a var for temperature and set it equal to 80
// Step 2: Log "The temperature is 80 degrees"
// Step 3: if else statement
// if temp > 80, output "Time to swim"

// create a precipitation variable and set it equal to false
// only output time to swim if temperature greater than 80 AND precip is false

// create a variable called indoors
// if indoors, log "time to swim" regardless of precip and temperature

var temperature = 75;
var precipitation = 'raining';
var indoors = false;

console.log("The temperature is " + temperature + "degrees." );

if (temperature >= 80 && precipitation !== 'raining' && precipitation !== 'snowing') {
	console.log('Time to swim!');
} else if (indoors) {
	console.log('Time to swim!');
} else {
	console.log('You should probably just stay home.');
}