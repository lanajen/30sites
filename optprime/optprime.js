function Numbers () {
						var n = prompt ("Please enter any integer greater than 1");
						var answer = [];
						//JS intakes user input as a string
						if (n === "2") {
							answer.push(2);
						}
						else if	 (n > 2) {	
							answer.push(2,3); //before the first inner for loops, answer is [2,3] right?
							console.log(answer);
							for (var i=4; i <= n; i++) {
								var numIsPrime = true;
								console.log(answer[0]);
								for (var j=0; j < answer.length; j++) {
									if (answer[j] <= Math.floor(Math.sqrt(i))) {
										if ( i % answer[j] === 0) {
											numIsPrime = false;
											console.log(answer);
											break;
										}
									}
								else {
								break;
								}
							}
							if (numIsPrime==true) {
								//if array is empty, then that i value has no clean divisors
								//meaning it is prime
								answer.push(i);
								console.log(answer);
								//this loop should push all prime numbers to the array named answer
								//so my values are being saved, so when the loop ends, my array-ed values remain
							}
						}
						//Tom's suggestion: defn var string and export from array using for loop, concatenate existing  
						//answer values with spaces and commas and progressive values of looping through array	
					}	
					else {
						answer.push("Whoopsies! Please enter a valid value.");
					}
					document.getElementById("primes").innerHTML= answer.toString();
				}