
function getComputerChoice(){
    // this will randomly return either 'Rock', 'Paper' or 'Scissors'.
    // array = [rock, paper, scissors ]
    // randomly select aray by index random.[0]

    const index = Math.floor((Math.random() * 3));
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[index]
}

function playRound(playerSelection, computerSelection){

    const player = playerSelection.toLowerCase();

    if (player === 'rock'){
        if (computerSelection === 'Rock'){
            console.log(`Tie! Player: Rock, Computer: Rock`);
            return 0
        }
        else if (computerSelection === 'Paper') {
            console.log(`You lose! Paper beats Rock!`);
            return -1
        }
        else {
            console.log(`You win! Rock beats Scissors!`);
        }

    } else if (player === 'paper') {
        if (computerSelection === 'Rock') {
            console.log(`You win! Paper beats Rock!`);
            return 1
        } else if (computerSelection === 'Paper'){
            console.log('Tie! Player: Paper, Computer: Paper');
            return 0
        } else {
            console.log(`You lose! Scissors beat Paper`);
            return -1
        }
    } else if (player === 'scissors'){
        if (computerSelection === 'Rock'){
            console.log(`You lose! Rock beats Scissors`);
            return -1
        } else if (computerSelection === 'Paper') {
            console.log(`You win! Scissors beat Paper!`);
            return 1
        } else {
            console.log(`Tie! Player: Scissors, Computer: Scissors`)
            return 0
        }
    }
}

function playGame(){
    let p1 = 0
    let p2 = 0

    for (let i = 0; i<5; i++){
        let playerSelection = prompt('Rock, Paper, or Scissors?: ');
        const computer = getComputerChoice();
        let result = playRound(playerSelection, computer);
        if (result == 1) {
            p1 += 1;
        }
        else if (result == -1){
            p2 +=1;
        }
    };
    if (p1 > p2){
        console.log(`Player Wins! Score - Player: ${p1}, Computer: ${p2}`)
    } else {
        console.log(`Computer Wins! Score - Player: ${p1}, Computer: ${p2}`)
    };
}


playGame()