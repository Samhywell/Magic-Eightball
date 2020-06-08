// Variable used to store username
let userName = "Sam";

// Ternary operator that decides what to do if username is entered or not 
userName === "Sam" ? console.log("Hello, Sam!") :
console.log("Hello!");

// Variable of a string that is a question the user wants to ask
let userQuestion = "Will my team win this weekend?";

// Ternary operator stating what question was asked
userQuestion === "Will my team win this weekend?" ? console.log("Sam asked if their team will win this weekend.") :
console.log("Please ask me a question.");

let answers = [
	"Cannot predict now",
  	"Please try again",
  	"Do not count on it",
  	"My sources say no",
  	"Outlook not so good",
  	"It is decidedly so",
  	"Signs point to yes",
 	 "It is certain"
	];

// variable that will generate a random number between 0 & the amount of answers minus 1
let randomNumber = Math.floor(Math.random() * answers.length);


// Prints the response by accessing the answers array with the random number as the key
console.log(`The eight ball answered: ${answers[randomNumber]}`); 
