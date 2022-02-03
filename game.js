let option = ['PIEDRA', 'PAPEL', 'TIJERAS'];
let winner = 'Has ganado';
let loser = 'Has perdido';
let draw = 'Has empatado';

function computerPlay(options=option) {
    const computerRandomPick = options[Math.floor(Math.random()*options.length)];
    console.log(computerRandomPick);
    return computerRandomPick;
}
/*
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
*/
const computerSelection = computerPlay();
let playerSelection;

//UI
const piedra = document.querySelector('#piedrabt');  
const papel = document.querySelector('#papelbt'); 
const tijera = document.querySelector('#tijerabt');
const container = document.querySelector('#container');
const div = document.createElement('div');

piedra.addEventListener('click', () => {
    console.log('PIEDRA');
    div.textContent = Play(playerSelection = 'PIEDRA', computerSelection);
    container.appendChild(div);
});

papel.addEventListener('click', () => {
    console.log('PAPEL');
    div.textContent = Play(playerSelection = 'PAPEL', computerSelection);
    container.appendChild(div);
});

tijera.addEventListener('click', () => {
    console.log('TIJERAS');
    div.textContent = Play(playerSelection = 'TIJERAS', computerSelection);
    container.appendChild(div);
});


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
    } else if (playerSelection === 'TIJERAS' && computerSelection === 'TIJERAS') {
        return draw;
    } else {
        return 'error fatal';
    }
}



 


