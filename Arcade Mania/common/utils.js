async function showAlert(message){
    const gameAlertdiv = document.querySelector('.game-alert');
    const gameArea = document.querySelector('.game-alert-message');

    gameAlertdiv.style.opacity = '1';
    gameAlertdiv.style.zIndex = '20';
  
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


async function showNextGame(gioco) { 

    const gameButt = document.querySelectorAll('.game-new');
    
    gameButt[0].innerHTML=GameLabel[0][0];
    gameButt[1].innerHTML=GameLabel[0][1];
    
    
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
    await sleep(200);
    gameButt[0].style.cursor = 'pointer';
    gameButt[1].style.cursor = 'pointer';
}

const GameLabel = [['Inizia X','Inizia O']]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showFinish(message,gioco){
    
    showAlert(message);
    await sleep(1180);
    showNextGame(gioco);
}