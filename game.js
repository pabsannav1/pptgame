let option = ['PIEDRA', 'PAPEL', 'TIJERAS'];
let winner = 'Has ganado';
let loser = 'Has perdido';
let draw = 'Has empatado';

function computerPlay(options=option) {
    let computerSelection = options[Math.floor(Math.random()*options.length)];
    return computerSelection;
}

function playerPlay() {
    let playerSelection1 = prompt('Elige tu jugada: piedra, papel o tijeras');
    playerSelection2 = playerSelection1.toUpperCase();

    if (option.indexOf(playerSelection2) != -1) {
        playerSelection = playerSelection2;
        return console.log(playerSelection);
    } else {
        const inputerror = 'No ha escrito bien su elección';
        return console.log(inputerror);
    }
}

computerPlay();
playerPlay();

function Play() {
    if (playerSelection === 'PIEDRA' && computerSelection === 'TIJERAS' {

    }
}
