const divEl1 = document.getElementById('elemento1');

divEl1.classList.add('gold') // aggiunge la classe gold all'elemtno che ho nella costante divEl1

const newDiv = document.createElement('div');
newDiv.innerText = 'Pitucci boss';
newDiv.classList.add('gold');
divEl1.appendChild(newDiv);
var i = 0;



btn.addEventListener('click', function() { 
    console.log('Dioporco!' + i);
    i++;
});