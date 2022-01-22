const cells = document.querySelectorAll('.cell');

let turn = 0;

const cellSigns = [];


var over=0;




for(let i = 0; i < cells.length; i++) {
    
    const cell = cells[i];

    var nextButt;
    
    cell.addEventListener('click', function (){
        

        if(cellSigns[i]){
            return;
        };
        var sign
        if (turn % 2) {
            sign = 'O';
        } else {
            sign = 'X';
        }
        
        cell.innerText = sign;
        cellSigns[i] = sign;
                
        let hasWon = checkVictory();   
        if(hasWon) {
            showFinish(`${sign} ha vinto`,0);
            return 'dotti';
        } else if (turn == 8) {
            showFinish('pareggio',0);
            return
        }

        turn++;
    })
}

/*
const nextButt = document.querySelectorAll('.game-new');

for(let i = 0; i < nextButt.length; i++) {
    const butt= nextButt[i];

    butt.addEventListener('click', function (){
        console.log('dotti');
        if(butt.innerHTML==GameLabel[0][0]) {
            sign = 'X';
        }
        const gameAlert = document.querySelector('.game-alert');
        gameAlert.parentNode.removeChild(gameAlert);

    })
}
*/

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