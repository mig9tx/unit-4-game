$(document).ready(function () {//allows the html to be fully loaded first and then runs the script in JS once DOM is ready.
    var greenValue = [];//global variables defined
    var blueValue = [];
    var redValue = [];
    var orangeValue = [];
    var randomNumber = [];
    var userScore = 0;
    var userWins = 0;
    var userLoss = 0;
    random();//this calls the random function below

    function random() {//this function sets random values for: number to match and for each individual crystal
        userScore = 0;
        randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $("#match").text(randomNumber);//pushes the random number to match to the html element and displayed in window
        greenValue = Math.floor(Math.random() * (12 - 1) + 1);
        blueValue = Math.floor(Math.random() * (12 - 1) + 1);
        redValue = Math.floor(Math.random() * (12 - 1) + 1);
        orangeValue = Math.floor(Math.random() * (12 - 1) + 1);
        $("#user").text(userScore);//pushes to the html element id the current userScore

    }
    $("#win").text("Wins: " + userWins);//pushes to the html element the current number of wins and losses
    $("#loss").text("Losses: " + userLoss);

    function checkScore() {//this function check to see if the current userScore is equal to the target number to match
        if (userScore === randomNumber) {//if the nuber matches, userScore goes up by one and the function to generate random numbers is called again
            userWins++;
            random();
        }
        else if (userScore > randomNumber) {//if the number goes over, userScore loss goes up by one and the function to generate random numbers is called again
            userLoss++;
            random();
        }
        $("#win").text("Wins: " + userWins);//pushes the current win amount to the html element id
        $("#loss").text("Losses: " + userLoss);//pushed the current loss amount to the html element id
    }

    clickCrystals(); //this calls the function for the even listener each time one of the crystals is clicked

    function clickCrystals() {//this function has an even listener, adds value to userScore based on the click event, checks userScore
        $("#greencrystal").on("click touch", function () {//on click even for green crystal
            userScore = userScore + greenValue;//updates the variable for user score with the value added from clicking the green crystal
            $("#user").text(userScore);//pushes the value to the userScore html element
            checkScore();//runs the checkScore function to determine if the user wins or losses
        });

        $("#bluecrystal").on("click touch", function () {
            userScore = userScore + blueValue;
            $("#user").text(userScore);
            checkScore();
        });
        $("#redcrystal").on("click touch", function () {
            userScore = userScore + redValue;
            $("#user").text(userScore);
            checkScore();
        });

        $("#orangecrystal").on("click touch", function () {
            userScore = userScore + orangeValue;
            $("#user").text(userScore);
            checkScore();


        });
    }
})