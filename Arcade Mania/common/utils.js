function showAlert(message){
    const gameArea = document.querySelector('.game-area');
  
    const alertMessage = `
    <div class="game-alert">
      <div class="game-alert-message">${message}</div>
    </div>
    `;
  
    gameArea.innerHTML = gameArea.innerHTML + alertMessage;

    
    /*setTimeout(newGameAlert, 1000);*/
    

  }

function newGameAlert(){
    const gameAlert = document.querySelector('.game-alert-message');
    gameAlert.style.top ='-1%';
    for(let i = 0; i <20;){
        gameAlert.style.top=`${parseInt(gameAlert.style.top)-1}%`;
    }
}