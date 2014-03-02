function myTranslate () {
	var word = prompt ("Please enter a word");

	var firstLetter = word.substring(0,1);
	var subword = word.substring(1);

	if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
		word = word;
	}
	else if (typeof word !== 'string') {
		word = "Oops! Please enter a word";
	}
	else {		
		word = subword.concat(firstLetter,"ay");
	}
	document.getElementById("answer").innerHTML=word;
};