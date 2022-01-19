const cells = document.querySelectorAll('.cell');

let turn = 0;

const cellSigns = [];

const winnerp = document.getElementById('winner');


var over=0;




for(let i = 0; i < cells.length; i++) {
    
    const cell = cells[i];

    
    
    cell.addEventListener('click', function (){

        if (over==1) {
            return;
        }

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
            winnerp.innerText = "Il giocatore " + sign + " ha vinto!";
            over = 1;
            return
        } else if (turn == 9) {
            winnerp.innerText = 'La partita è finita in pareggio';
            over = 1;
            return
        }

        turn++;
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