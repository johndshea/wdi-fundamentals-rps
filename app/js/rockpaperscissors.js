////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move) {
        return move;
    }
    else {
        return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move) {
        return move;
    }
    else {
        return randomPlay();

    }
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var winner;
    if (playerMove === computerMove) { winner = 'tie'; } 
    else if (playerMove === 'rock') {
        if (computerMove === 'scissors') { winner = 'player'; } 
            else { winner = 'computer'; }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'paper') { winner = 'player'; }
        else { winner = 'computer'; }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') { winner = 'player'; }
        else { winner = 'computer'; }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var x = getWinner(getPlayerMove(),getComputerMove());
        if (x == "computer") {
            console.log("The Computer Wins with " + getComputerMove() + "!");
            computerWins += 1;
        }
        if (x == "player") {
            console.log("The Player Wins with " + getPlayerMove() + "!");
            playerWins += 1;
        }
        if (x == "tie") {
            console.log("It's a tie!")
        }
    }
    return [playerWins, computerWins];
} 

playToFive();