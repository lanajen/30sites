var currentTime = new Date ( );

	var currentHours = currentTime.getHours ( );

if (currentHours < 6 || currentHours > 21) {
    if (document.body) {
        document.body.background = "night.jpg";
    }
}
else if (currentHours > 5 && currentHours < 11) {
    if (document.body) {
        document.body.background = "sunrise.jpg";
    }
}
else if (currentHours > 10 && currentHours < 18) {
	if (document.body) {
        document.body.background = "midday.jpg";
    }
}
else {
  	if (document.body) {
  		document.body.background = "dusk.jpg";
  }
 }