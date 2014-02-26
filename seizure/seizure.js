var colors = ["#ff0099", "#f3f315", "#ff6600", "#6e0dd0", "#4D4DFF", "#00ffff", "#003EFF", "#37FDFC", "#90FEFB", "#CC00FF"];
					
function changecolor() {
	var col = document.getElementById("backgroundc");
	col.style.backgroundColor = colors[Math.floor(Math.random()*10)];
}