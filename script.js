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
    let result = '';
	const buttons = document.querySelectorAll('button');
	buttons.forEach((button) => {
		button.addEventListener('click', () => {

			userChoice = button.getAttribute('id');
            let userPic = document.querySelector('.playerPic')
            userPic.src = `./img/${userChoice}.png`;
            userPic.style.cssText = 'width: 128px; height: auto;';

			computerChoice = getComputerChoice();
            let computerPic = document.querySelector('.computerPic')
            computerPic.src = `./img/${computerChoice}.png`;
            computerPic.style.cssText = 'width: 128px; height: auto;';

            let playerScore = document.querySelector('.playerScore');
            let computerScore = document.querySelector('.computerScore');

			result = determineWinner(userChoice, computerChoice);
            if (result === 'The computer won!'){
                computerScore.textContent = parseInt(computerScore.textContent) + 1;
            }
            if (result === 'You won!'){
                playerScore.textContent = parseInt(playerScore.textContent) + 1;
            }
            if (parseInt(computerScore.textContent) === 5){
                alert('The computer won the game!');
            }
            if (parseInt(playerScore.textContent) === 5){
                alert('You won the game!');
            }   
		});
	});
}

game();