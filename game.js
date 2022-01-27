let option = ['PIEDRA', 'PAPEL', 'TIJERAS'];
let winner = 'Has ganado';
let loser = 'Has perdido';
let draw = 'Has empatado';

function computerPlay(options=option) {
    const computerRandomPick = options[Math.floor(Math.random()*options.length)];
    console.log(computerRandomPick);
    return computerRandomPick;
}

function playerPlay() {
    const playerPlay1 = prompt('Elige tu jugada: piedra, papel o tijeras');
    const playerPlay2 = playerPlay1.toUpperCase();
    let result;
    const inputerror = 'No ha escrito bien su elección';

    if (option.indexOf(playerPlay2) != -1) {
        result = playerPlay2;
    } else {
        result = inputerror;
    }

    console.log(result);
    return result;
}

const computerSelection = computerPlay();
const playerSelection = playerPlay();

function Play(playerSelection = playerSelection, computerSelection = computerSelection) {

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

console.log(Play(playerSelection, computerSelection));

