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

// variable that will generate a random number between 0 & 7
let randomNumber = Math.floor(Math.random() * 8);

// Variable with an empty string that can have a value saved to it
let eightBall = '';

// A control flow of switch statements that takes in the random number, and then assigns it to the variable eightBall
    switch(randomNumber) {
        case 0:
            eightBall = 'Cannot predict now'
            break;
        case 1:
            eightBall = 'Please try again'
            break;
        case 2:
            eightBall = 'Do not count on it'
            break;
        case 3:
            eightBall = 'My sources say no'
            break;
        case 4:
            eightBall = 'Outlook not so good'
            break;
        case 5:
            eightBall = 'It is decidedly so'
            break;
        case 6:
            eightBall = 'Signs point to yes'
            break;
        case 7:
            eightBall = 'It is certain'
            break;                    
    }

// Prints the outcome of the variable eightBall
console.log(`The eight ball answered: ${eightBall}`); 
