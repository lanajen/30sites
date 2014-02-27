function countdownClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros to eliminate space
  var displayHours = 23 - currentHours;
  currentMinutes = 59 - currentMinutes;
  currentSeconds = 59 - currentSeconds;

  // Pad the minutes and seconds with leading zeros to eliminate space
  var displayMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  var displaySeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  //The display
  var currentTimeString = displayHours + ":" + displayMinutes + ":" + displaySeconds;

  //updates, in html, every second
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}
