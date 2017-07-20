// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(childrenNum, partnerName, geoLocation, jobTitle) {
	console.log("You will be a " + jobTitle + " in " + 
	geoLocation + ", and married to " +
	partnerName + " with " + childrenNum + ' Kids');
}

tellFortune(3, 'Carlos', 'Mexico', 'Engineer');
tellFortune(3, 'Pedro', 'Francia', 'Cook');
tellFortune(3, 'Frank', 'Israel', 'Doctor');