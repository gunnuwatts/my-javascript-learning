// Practice Q2
let gameNum = 25;

let userNum = prompt("Guess the game number : ");

while(userNum != gameNum) { //game
    userNum =  prompt("You entered wrong number. Guess again :")
}

console.log("congratulations, you entered the right number");