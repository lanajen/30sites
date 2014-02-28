var theNumber = Math.floor((Math.random()*100)+1);
var clicks = 0;

function guessNumber () {
	//get the value from entry
	var guess=document.getElementById('enter_guess').value;
	var guess_num=parseInt(guess);
	var reply;
	
	if (guess_num < 1 || guess_num > 100) {
		reply = ("Whoopsies! Please enter a valid guess.");
	}
	else if (isNaN(guess_num)) {
		reply = ("Oops! Please enter a valid number");
	}
	else {

		if (guess_num > theNumber) {
			reply = "The number is lower than this guess. Try again!";
		}
		else if (guess_num < theNumber) {
			reply = "The number is higher than this guess. Try again!";
		}
		else if (guess_num = theNumber) {
			reply = "That's right! 'You have chosen... wisely.'";
			document.getElementById('counter').innerHTML="It took you"+" "+clicks+" "+"guesses.";
		}
		else {
			reply = "Let's try that again";
		}

	};
	document.getElementById('enter_guess').value = '';
	document.getElementById('answer').innerHTML=reply;
	clicks = clicks + 1;
};
document.getElementById('enter_button').onclick = guessNumber;