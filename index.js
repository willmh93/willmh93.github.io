console.log("hey")

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Draw on the canvas
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 150, 100);

var posX = 0;
var posY = 0;

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

	ctx.fillStyle = 'blue';
	ctx.fillRect(posX-50, posY-50, 50, 50); // Draw a rectangle

	posX += 2; // Update the X position
	posY += 2; // Update the Y position

	if (posX > 450) posX = 0;
	if (posY > 350) posY = 0;

	requestAnimationFrame(draw); // Request to do this again ASAP
}

draw();