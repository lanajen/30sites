var x = 5; //Starting x coordinate
var y = 200; //Starting y coordinate
var max_x = 800; //maximum x coordinate
var max_y = 500; //maximum y coordinate
var xoffset = 15; //Move 15px each time
var yoffset = 15; //Move 15px each time
var min_y = 0;
var min_x = 0;

function moveLogo() {
	x = x + xoffset;
	y = y + yoffset;

	//Move image to new location
	document.getElementById("ball").style.top = y+'px';
	document.getElementById("ball").style.left = x+'px';

	//if reach boundaries, reset offset coordinates
	if ((x+xoffset > max_x) || (x+xoffset < min_x)) {
		xoffset *=-1;
	}
	if ((y+yoffset > max_y) || (y+yoffset < min_y)) {
		yoffset *=-1;
	}
	window.setTimeout('moveLogo()',100);

	//call moveLogo every 100 ms
}