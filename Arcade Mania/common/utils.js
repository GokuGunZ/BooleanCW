async function showAlert(message){
    const gameArea = document.querySelector('.game-alert-message');
  

    

    gameArea.innerHTML = gameArea.innerHTML + message;


    setTimeout(function() {
        const gameAlert = document.querySelector('.game-alert-message');
        gameAlert.style.top=`${40-0.04}%`;
    }, 500);

    await sleep(500)

    const winnerAlert = setInterval(function() {
        const gameAlert = document.querySelector('.game-alert-message');
        var i = parseFloat(gameAlert.style.top);
        gameAlert.style.top=`${i-0.04}%`;
        if (i==34.8) {
            clearInterval(winnerAlert);
        return;
        }
    },1);
        
    return;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function showNextGame(gioco) { 

    const gameArea = document.querySelector('.game-alert');

    const gameMessage = `
    <div class="game-alert-game">
        <div class="game-new" style="opacity: 0.01">${GameLabel[gioco][0]}</div>
        <div class="game-new" style="opacity: 0.01">${GameLabel[gioco][1]}</div>
    </div>
    `;
  
    gameArea.innerHTML = gameArea.innerHTML + gameMessage;

    const appearNext = setInterval(function() {
        const gameNew = document.querySelectorAll('.game-new');
        var i = parseFloat(gameNew[0].style.opacity);
        gameNew[0].style.opacity=`${i+0.01}`;
        gameNew[1].style.opacity=`${i+0.01}`;
        if (i==1) {
            clearInterval(appearNext);
        return;
        }
    },1);
}

const GameLabel = [['Inizia X','Inizia O']]

async function showFinish(message,gioco){

    showAlert(message);
    await sleep(1680);
    showNextGame(gioco);
}