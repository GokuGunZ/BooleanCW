async function showAlert(message){
    const gameArea = document.querySelector('.grid');
  

    const alertMessage = `
    <div class="game-alert">
      <div class="game-alert-message">${message}</div>
    </div>
    `;
  

    gameArea.innerHTML = gameArea.innerHTML + alertMessage;


    setTimeout(function() {
        const gameAlert = document.querySelector('.game-alert-message');
        gameAlert.style.top=`${40-0.04}%`;
    }, 1000);

    await sleep(1000)

    const winnerAlert = setInterval(function() {
        const gameAlert = document.querySelector('.game-alert-message');
        var i = parseFloat(gameAlert.style.top);
        gameAlert.style.top=`${i-0.04}%`;
        if (i<27.8) {
            clearInterval(winnerAlert);
        return;
        }
    },1);
        
    return;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function showNextGame(message) { 

    const gameArea = document.querySelector('.game-alert');

    const gameMessage = `
    <div class="game-alert-game">
        <div class="game-new">Inizia X</div>
        <div class="game-new">Inizia O</div>
    </div>
    `;
  
    gameArea.innerHTML = gameArea.innerHTML + gameMessage;
}


async function showFinish(message){

    showAlert(message);
    await sleep(2250);
    showNextGame();
}