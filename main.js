var currentHumScore = 0;
var currentCompScore = 0;
var humanChoice = "";
var compChoice = "";
var gameOver = false;

const container = document.querySelector(".container");

const humScore = document.querySelector("#humScore");
humScore.textContent = currentHumScore;

const compScore = document.querySelector("#compScore");
compScore.textContent = currentCompScore;

const choiceButtons = document.querySelectorAll(".choices button");
const buttons = document.querySelector(".choices");

const displayHumChoice = document.createElement("div");
buttons.after(displayHumChoice);

const displayCompChoice = document.createElement("div");
displayHumChoice.after(displayCompChoice);

for (var i = 0; i < choiceButtons.length; ++i) {
    choiceButtons[i].addEventListener("click", function (e) {
        humanChoice = e.target.textContent;
        displayHumChoice.textContent = "Your Choice: " + humanChoice;
    });
}

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "Rock";
    } else if (rand === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

const gameMessage = document.createElement("div");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        if (computerChoice == "Rock") {
            gameMessage.textContent = "Tie!";
        } else if (computerChoice === "Paper") {
            gameMessage.textContent = "You lose! Paper beats rock.";
            currentCompScore++;
            compScore.textContent = currentCompScore;
        } else {
            gameMessage.textContent = "You win! Rock beats scissors."
            currentHumScore++;
            humScore.textContent = currentHumScore;
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice == "Rock") {
            gameMessage.textContent = "You win! Paper beats rock.";
            currentHumScore++;
            humScore.textContent = currentHumScore;
        } else if (computerChoice === "Paper") {
            gameMessage.textContent = "Tie!";
        } else {
            gameMessage.textContent = "You lose! Scissors beats paper.";
            currentCompScore++;
            compScore.textContent = currentCompScore;
        }
    } else {
        if (computerChoice == "Rock") {
            gameMessage.textContent = "You lose! Rock beats scissors.";
            currentCompScore++;
            compScore.textContent = currentCompScore;
        } else if (computerChoice === "Paper") {
            gameMessage.textContent = "You win! Scissors beats paper";
            currentHumScore++;
            humScore.textContent = currentHumScore;
        } else {
            gameMessage.textContent = "Tie!";
        }
    }
    displayCompChoice.after(gameMessage);
}

const confirm = document.querySelector("#confirm");

const nextRound = document.createElement("button");
nextRound.setAttribute("id", "nextRound");
nextRound.textContent = "Next Round";

const result = document.createElement("h2");
result.setAttribute("id", "result");

const restart = document.createElement("button");
restart.setAttribute("id","restart");
restart.textContent = "Restart";

confirm.addEventListener("click", function(){
    compChoice = getComputerChoice();
    displayCompChoice.textContent = "Computer's Choice: " + compChoice;
    playRound(humanChoice, compChoice);
    if (currentHumScore === 5 || currentCompScore === 5) {
        if(currentHumScore === 5) {
            result.textContent = "Congrats! You win";
        } else {
            result.textContent = "Computer wins, try again!";
        }
        container.appendChild(result);
        gameOver = true;
    }
    if (gameOver === true) {
        confirm.after(restart);
    } else {
        confirm.after(nextRound);
    }
});

nextRound.addEventListener("click", function(){
    nextRound.remove();
    displayHumChoice.textContent = "";
    displayCompChoice.textContent = "";
    gameMessage.remove();
});

restart.addEventListener("click", function(){
    restart.remove();
    displayHumChoice.textContent = "";
    displayCompChoice.textContent = "";
    gameMessage.remove();
    currentHumScore = 0;
    currentCompScore = 0;
    humScore.textContent = currentHumScore;
    compScore.textContent = currentCompScore;
    result.remove();
    gameOver = false;
});