const elements = $('#myDivWithAnId');
console.log(elements);

// Attach an event
$('#myButton').on('click', function(event){
	console.log(event);
	//Invoked when #myButton gets a click event
	this.innerHTML = "button clicked";
})
// OR
$('#myButton').click(function(event){
	//Invoked when #myButton gets a click event
	this.innerHTML = "button clicked";
})

// Manipulating the DOM
$('#myButton').on('click', function(event){
	//Update button html
	$(this).html("button clicked");

	//Create a new element
	const newEl = '<a>look at me!</a>';

	//Append new element
	$('#someOtherElement').append(newEl);

	//Add an attribute
	// $('#someOtherElement').append(newEl).attr({'href' : 'http://techtalentsouth.com'})

	//Remove it
	newEl.remove();

});

// Bringing it all together
$('#myButton').click(function(event){
    const self = $(this);
    
    self.html('blah blah blah')
    
    $('#someOtherElement').css('background-color', 'green');
    
    console.log('button clicked!');
    
    self.css('color', 'red');
 });

// Document ready
$(document).ready(function() {
	console.log('this runs second');
})

console.log('this runs first');

// Updating styles and classes 
//Edit an inline style
$('#myButton').css({color: 'red'});

//Better...

//Add a CSS Class
$('#myButton').addClass('newClass');

//Remove a CSS Class
$('#myButton').removeClass('newClass');




