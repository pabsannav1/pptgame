let option = ['PIEDRA', 'PAPEL', 'TIJERAS'];
let winner = 'Has ganado';
let loser = 'Has perdido';
let draw = 'Has empatado';

function computerPlay(options=option) {
    const computerSelection = options[Math.floor(Math.random()*options.length)];
    return console.log(computerSelection);
}

function playerPlay() {
    const playerSelection1 = prompt('Elige tu jugada: piedra, papel o tijeras');
    const playerSelection2 = playerSelection1.toUpperCase();

    if (option.indexOf(playerSelection2) != -1) {
        const playerSelection = playerSelection2;
        return console.log(playerSelection);
    } else {
        const inputerror = 'No ha escrito bien su elección';
        return console.log(inputerror);
    }
}

computerSelection = computerPlay();
playerSelection = playerPlay();

console.log(computerSelection === playerSelection);

function Play(playerSelection, computerSelection) {
    if (playerSelection === 'PIEDRA' && computerSelection === 'PIEDRA') {
        return draw;
    } else if (playerSelection === 'PIEDRA' && computerSelection === 'PAPEL') {
        return loser;
    } else if (playerSelection === 'PIEDRA' && computerSelection === 'TIJERAS') {
        return winner;
    } else if (playerSelection === 'PAPEL' && computerSelection === 'PIEDRA') {
        return winner;
    } else if (playerSelection === 'PAPEL' && computerSelection === 'PAPEL') {
        return draw;
    } else if (playerSelection === 'PAPEL' && computerSelection === 'TIJERAS') {
        return loser;
    } else if (playerSelection === 'TIJERAS' && computerSelection === 'PIEDRA') {
        return loser;
    } else if (playerSelection === 'TIJERAS' && computerSelection === 'PAPEL') {
        return winner;
    } else if (playerSelection === 'TIJERAS' && computerSelection === 'PAPEL') {
        return draw;
    } else {
        return 'error fatal'
    }
}

console.log(Play());
