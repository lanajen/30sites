function calc () {
	//to make the letters of entry the same case as comparison value of function
	var first = document.loveform.name1.value.toUpperCase();
	//to find length of string
	var firstlength = document.loveform.name1.value.length;
	var second = document.loveform.name2.value.toUpperCase();
	var secondlength = document.loveform.name2.value.length;
	//the score keeper
	var LoveCount=0;

	//to give value to certain letters of string, and add values together
	for (var i=0; i < firstlength; i++) {
		var letter1=first.substring(i,i+1);
		if (letter1=='V') {
			LoveCount+=1
		};
		if (letter1=='I') {
			LoveCount+=1
		};
		if (letter1=='E') {
			LoveCount+=1
		};
		if (letter1=='D') {
			LoveCount+=1
		};
		if (letter1=='A') {
			LoveCount+=1
		};
		if (letter1=='M') {
			LoveCount+=1
		};
		if (letter1=='O') {
			LoveCount+=1
		};
		if (letter1=='U') {
			LoveCount+=1
		};
		if (letter1=='R') {
			LoveCount+=1
		};
	}

	//yes I could have combined all of the if statements,
	//but I want the hidden message to be seen :)
	for (var i=0; i < secondlength; i++) {
		var letter2=second.substring(i,i+1);
		if (letter2=='V') {
			LoveCount+=1
		};
		if (letter2=='I') {
			LoveCount+=1
		};
		if (letter2=='E') {
			LoveCount+=1
		};
		if (letter2=='D') {
			LoveCount+=1
		};
		if (letter2=='A') {
			LoveCount+=1
		};
		if (letter2=='M') {
			LoveCount+=1
		};
		if (letter2=='O') {
			LoveCount+=1
		};
		if (letter2=='U') {
			LoveCount+=1
		};
		if (letter2=='R') {
			LoveCount+=1
		};
	};

	//to arbitrarily assign the love %
	var amount=0;
	if (LoveCount > 0) {
		amount = 5-Math.sqrt(2*(firstlength+secondlength))
	};
	if (LoveCount > 1) {
		amount = 10-Math.sqrt(2*(firstlength+secondlength))
	};
	if (LoveCount > 2) {
		amount = 20-Math.sqrt(2*(firstlength+secondlength))
	};
	if (LoveCount > 3) {
		amount = 30-Math.sqrt(2*(firstlength+secondlength))
	};
	if (LoveCount > 4) {
		amount = 40-Math.sqrt(2*(firstlength+secondlength))
	};
	if (LoveCount > 5) {
		amount = 50-Math.sqrt(2*(firstlength+secondlength))
	};
	if (LoveCount > 6) {
		amount = 60-Math.sqrt(2*(firstlength+secondlength))
	};
	if (LoveCount > 7) {
		amount = 70-Math.sqrt(2*(firstlength+secondlength))
	};
	if (LoveCount > 8) {
		amount = 80-Math.sqrt(2*(firstlength+secondlength))
	};
	if (LoveCount > 9) {
		amount = 90-Math.sqrt(2*(firstlength+secondlength))
	};
	if (firstlength==0 || secondlength==0) {
		amount = "n/a"
	};
	if (amount < 0) {
		amount = 0
	};
	if (amount > 99) {
		//because nothing is for sure ;)
		amount = 99
	};

	document.loveform.output.value=Number(amount).toFixed(2)+"%";
}
