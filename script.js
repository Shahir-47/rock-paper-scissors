// get Computer's Choice
function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// determine winner for each round
function determineWinner(playerSelection, computerSelection){

    let userChoice = playerSelection.toLowerCase();

    if (userChoice === computerSelection){
        return 'The game is a tie!';
    }
    if (userChoice === 'rock'){
        if (computerSelection === 'paper'){
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper'){
        if (computerSelection === 'scissors'){
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors'){
        if (computerSelection=== 'rock'){
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
}

function play(){
	
}

// play a 5 round game
function game(){
    let userChoice;
    let computerChoice = '';

	const buttons = document.querySelectorAll('button');
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			userChoice = button.textContent;
			computerChoice = getComputerChoice();
			console.log("You threw: " + userChoice);
			console.log("The computer threw: " + computerChoice);
			let result = determineWinner(userChoice, computerChoice);
		});
	});
}

game();