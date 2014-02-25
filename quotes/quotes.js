
var motiquotes = ["'Success is not final, failure is not fatal; it is the courage to continue that counts.' -Winston Churchill", 
					"'You wanna hot body, you wanna Bugatti, you wanna Maserati, you better work b****' - Britney Spears",
					"'It's hard to fail, but worse to have never tried to succeed.' -Theodore Roosevelt",
					"'Worrying does not empty tomorrow of its troubles, it empties today of its strength.' -Corrie T. Boom",
					"'Change is inevitable, progress is optional.' -Tony Robbins",
					"'Yesterday, you said tomorrow.' -Nike",
					"'The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it.' -Jordan Belfort",
					"'Things are only impossible until somebody does what another believes can't be done.' -Tony Robbins",
					"'Courage is not the absence of fear, but the triumph over it.' -Nelson Mandela",
					"'There are no shortcuts to any place worth going.' -Beverly Sills"];

var stillquotes = ["'Every act of kindness benefits the giver as well as the receiver.' -Katrina Mayer",
					"'Enjoy the little things in life... for one day you'll look back and realize they were big things.' -Robert Brault",
					"'We cannot change the cards we are dealth, just how we play the hand.' -Randy Pausch",
					"'Sometimes you simply need to drift aimlessly, in order to reach the destination of aim.' -Lionel Suggs",
					"'Music gives color to the air of the moment.' -Karl Lagerfield",
					"'Nothing is more honorable than a grateful heart.' -Seneca",
					"'Peace does not mean to be in a place where there is no noise, trouble, or hard work. \
					Peace means to be in the midst of all those things and still be calm in your heart.' -Unknown",
					"'We do not remember days, we remember moments.' -Unknown",
					"'Ask yourself this question: Will this matter a year from now?' -Richard Carlson",
					"'Don't worry about those who talk behind your back. They are behind you for a reason.' -Unknown",
					"'When you stop chasing the wrong things, you give the right things a chance to catch you.' -Unknown"];
					
var display;
function motivationgenerator() {
	var pointer = Math.floor(Math.random()*10);
	display = motiquotes[pointer];
	document.getElementById("quote").innerHTML=display;
}
function stillnessgenerator(){
	var pointer = Math.floor(Math.random()*10);
	display = stillquotes[pointer];
	document.getElementById("quote").innerHTML=display;
}