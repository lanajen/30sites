var images = ["images/xmas1.jpeg", "images/xmas2.jpg", "images/xmas3.jpeg", "images/xmas4.jpg", "images/xmas5.jpg", "images/xmas6.jpg", "images/xmas6.jpg", "images/xmas8.jpg", "images/xmas9.jpg", "images/xmas10.jpeg"];
		
function changeimage() {
	var index = Math.floor(Math.random()*10);
    
    var pic = document.createElement("IMG");
    pic.style.height = '800px';
    pic.style.width = '800px';
    pic.src = images[index];
    
    var col = document.getElementById("main");
    while (col.hasChildNodes()) {
        col.removeChild(col.lastChild);
    }
    col.appendChild(pic);
}
