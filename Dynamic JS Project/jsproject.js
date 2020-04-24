// Main logic function of the game. Receives the move of the player and the computer, and returns the result.
function rpsLogic(pcMove, userMove)
{
    // Set variable resultOfGame to "Tie" as the default value.
    var resultOfGame = "Tie";
    var pcWins = "PC Wins";
    var userWins = "User Wins";

    // Based on some mathamatics, all possible winning combinations can be boiled down to this.
    if (pcMove - userMove == 1)
    {
        resultOfGame = pcWins;
    }

    else if (userMove - pcMove == 1)
    {
        resultOfGame = userWins;
    }

    else if (pcMove - userMove == -2)
    {
        resultOfGame = pcWins;
    }

    else if (userMove - pcMove == -2)
    {
        resultOfGame = userWins;
    }

    return resultOfGame;
}

// The function that hosts the game. Is invoked by the click of a button.
function runGame(playerMove)
{
    // Retrieve "PCs" move by creating a random number between 1-3
    var pcMove = Math.floor(Math.random() * 3) + 1;
    var userMove;

    // Retrieve the players move, depending upon the paramater that was passed into the function
    if (playerMove == "Rock")
    {
        userMove = 3;
    }
    else if (playerMove == "Scissors")
    {
        userMove = 2;
    }
    else if (playerMove == "Paper")
    {
        userMove = 1;
    }

    // Store the result of the game into variable result.
    var result = rpsLogic(pcMove, userMove);

    // Call the displayResult function, which displays who won the match.
    displayResult(result, pcMove, playerMove);
}

// Displays the winner of the match, and what the computer chose.
function displayResult(result, pcMove, playerMove)
{ 
    // Preload the paragraph tag where result message will be displayed.
    var message = document.getElementById("result");

    // Depending upon the result of the game, and the move that the pc chose, modify the message to be displayed.
    if (result == "PC Wins" && pcMove == 1)
    {
        message.innerHTML = "Your move was " + playerMove + ", the computers move was Paper. I'm afraid the computer beat you, because paper beats " + playerMove + "!";
    }
    else if (result == "PC Wins" && pcMove == 2)
    {
        message.innerHTML = "Your move was " + playerMove + ", the computers move was Scissors. I'm afraid the computer beat you, because paper beats " + playerMove + "!";
    }
    else if (result == "PC Wins" && pcMove == 3)
    {
        message.innerHTML = "Your move was " + playerMove + ", the computers move was Rock. I'm afraid the computer beat you, because paper beats " + playerMove + "!";
    }
    else if (result == "User Wins" && pcMove == 1)
    {
        message.innerHTML = "You won! The computer played paper but you outsmarted it!";
    }
    else if (result == "User Wins" && pcMove == 2)
    {
        message.innerHTML = "You won! The computer played scissors but you outsmarted it!";
    }
    else if (result == "User Wins" && pcMove == 3)
    {
        message.innerHTML = "You won! The computer played rock but you outsmarted it!";
    }
    else if (result == "Tie")
    {
        message.innerHTML = "You tied with the computer!";
    }
}
