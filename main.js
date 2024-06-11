var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "rock";
    } else if (rand === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let validChoice = false;
    while (validChoice === false) {
        let choice = (prompt("rock, paper, or scissors?")).toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            validChoice = true;
            return choice;
        } else {
            console.log("Invalid choice, please choose rock, paper, or scissors");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    let roundOver = true;
    console.log("Computer played: " + computerChoice);
    console.log("You played: " + humanChoice);
    if (humanChoice === "rock") {
        if (computerChoice == "rock") {
            console.log("Tie!");
            roundOver = false;
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        } else {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats rock.");
            humanScore++;
        } else if (computerChoice === "paper") {
            console.log("Tie!");
            roundOver = false;
        } else {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
    } else {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats paper");
            humanScore++;
        } else {
            console.log("Tie!");
            roundOver = false;
        }
    }
    return roundOver;
}

function playGame() {
    for (let rounds = 0; rounds < 5; rounds++){
        let tie = false;
        while (tie === false) {
            let compChoice = getComputerChoice();
            let humChoice = getHumanChoice();
            tie = playRound(humChoice, compChoice);
        }
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
        if (humanScore > 2 || computerScore > 2) {
            rounds = 5;
        }
    }
    if (humanScore > computerScore) {
        console.log("Congrats, you won the best out of 5!");
    } else {
        console.log("Tough luck, the computer won the best out of 5");
    }
}

playGame();

