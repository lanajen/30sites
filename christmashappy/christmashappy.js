var images = ["images/xmas1.jpeg", "images/xmas2.jpg", "images/xmas3.jpeg", "images/xmas4.jpg", "images/xmas5.jpg", "images/xmas6.jpg", "images/xmas7.JPG", "images/xmas8.jpg", "images/xmas9.jpg", "images/xmas10.jpeg"];
		
function changeimage() {
	var pic = Math.floor(Math.random()*10);
	document.getElementById("main").style.backgroundImage = url('images[pic]');
}
//function changeimage() {
//	var col = document.getElementById("main");
//	col.style.backgroundImage = "url(images[Math.floor(Math.random()*10)])";
//}
			