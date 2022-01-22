const cells = document.querySelectorAll('.cell');
const punti1 = document.querySelector('.punti1');
const punti2 = document.querySelector('.punti2');

let turn = 0;

const cellSigns = [];


var over=0;
var sign='X';

var victoryArray = [0,0];


for(let i = 0; i < cells.length; i++) {
    
    const cell = cells[i];

    
    cell.addEventListener('click', function (){
        

        if(cellSigns[i]){
            return;
        }
        
        cell.innerText = sign;
        cellSigns[i] = sign;
        
        let hasWon = checkVictory();   
        if(hasWon) {
            showFinish(`${sign} ha vinto`,0);
            if (sign=='X'){
                victoryArray[0]++;
                punti1.innerText = `${victoryArray[0]}`
            } else {
                victoryArray[1]++;
                punti2.innerText = `${victoryArray[1]}`
            }
            return 'dotti';
        } else if (turn == 8) {
            showFinish('pareggio',0);
            return
        }
        
        if(sign=='O'){
            sign = 'X';
        } else {
            sign = 'O';
        }
        
        turn++;
    })
}


const nextButt = document.querySelectorAll('.game-new');

for(let i = 0; i < 2; i++) {
    const butt= nextButt[i];

    butt.addEventListener('click', function (){
        if(butt.innerHTML==GameLabel[0][0]) {
            sign = 'X';
        } else {
            sign = 'O';
        }
        console.log(sign);

        const gameAlertdiv = document.querySelector('.game-alert');
        gameAlertdiv.style.opacity = '0';
        gameAlertdiv.style.zIndex = '5';   

        for(let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            cell.innerText = '';
        }
        cellSigns.length = 0;
        turn=0;
        const gameArea = document.querySelector('.game-alert-message');
        gameArea.innerText = '';
        gameArea.style.top = '40%';
        const gameNew = document.querySelectorAll('.game-new');
        nextButt[0].style.opacity='0.01';
        nextButt[1].style.opacity='0.01';
        nextButt[0].style.cursor = 'default';
        nextButt[1].style.cursor = 'default';
        
        


    })
}


function checkVictory() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let i=0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        const n1 = combination[0];
        const n2 = combination[1];
        const n3 = combination[2];

        if(cellSigns[n1] && (cellSigns[n1] == cellSigns[n2]) && (cellSigns[n1] == cellSigns[n3])){
            return 1;
        }
    }
    return 0;
}