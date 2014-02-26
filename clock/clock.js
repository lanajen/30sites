
function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros to eliminate space
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  //12-hour
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  //Convert hours
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  //The display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  //updates, in html, every second
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}
