//generate a random number for the computer

//generate a random number for each crystal
$(document).ready(function () {
var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19) + 1;
console.log(randomNumber)
$("#Random-Number").text("number to match: " + randomNumber);

var greenValue = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var blueValue = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var redValue = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var orangeValue = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var userScore = 0;
var userWins = 0;
var userLoss = 0;
$("#win").text("Wins: " + userWins);
$("#loss").text("Losses: " + userLoss);

function checkScore() {
    if (userScore === randomNumber) {
        userWins++;
        
    }
    else if (userScore > randomNumber) {
        userLoss++;
    }
    $("#win").text("Wins: " + userWins);
    $("#loss").text("Losses: " + userLoss);
    console.log(userLoss)
}


clickCrystals(); 



    function clickCrystals() {
        $("#greencrystal").on("click", function () {
            userScore = userScore + greenValue;
            $("#User-Score").text("Your Score: " + userScore);
            checkScore();
        });

        $("#bluecrystal").on("click", function () {
            userScore = userScore + blueValue;
            $("#User-Score").text("Your Score: " + userScore);
            checkScore();
        });
        $("#redcrystal").on("click", function () {
            userScore = userScore + redValue;
            $("#User-Score").text("Your Score: " + userScore);
            checkScore();
        });

        $("#orangecrystal").on("click", function () {
            userScore = userScore + orangeValue;
            $("#User-Score").text("Your Score: " + userScore);
            checkScore();

            
        });
    }})


