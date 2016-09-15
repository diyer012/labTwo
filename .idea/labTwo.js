/**
 * Created by Dhruva Iyer on 9/15/2016.
 */
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
var compare = function(userChoice, computerChoice)
{
    if(userChoice === computerChoice) {
        console.log("The result is a tie!");
    }
    else if(userChoice === "rock"){
        if(computerChoice === "scissors") {
            console.log("Rock wins");
        }
        else {
            console.log("Paper wins");
        }
    }
    else if(userChoice === "paper"){
        if(computerChoice === "rock") {
            console.log("Paper wins");
        }
        else {
            console.log("Scissors wins");
        }
    }
    else if(userChoice === "scissors"){
        if(computerChoice === "paper") {
            console.log("Scissors wins");
        }
        else {
            console.log("Rock wins");
        }
    }
    if(userChoice === true)
    {
        console.log("Yay!! You win.");
    }
    else{
        console.log("Aww!! Sorry You lose :( ");
    }

};
var comparision = compare(userChoice, computerChoice);

