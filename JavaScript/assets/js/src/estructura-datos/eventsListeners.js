


console.log('eventosListenes');





const hackBtn =  document.querySelector('#hack');
const comentarBtn =  document.querySelector('#comentar');




console.log(hackBtn);


hackBtn.addEventListener('click', () => {

    alert('boton click detetctado :)');

    hackBtn.style.color = 'red';
    hackBtn.style.backgroundColor = 'yellow';

}  );


comentarBtn.addEventListener('change', () => {
    console.log('cambiando..');
})


comentarBtn.addEventListener('keydown', (event) => {
    console.log('presionaste la tecka', event.code);
    

    if (comentarBtn.value.length > 3){
        console.log('buscando producto en el server');
        console.log(comentarBtn.value);
    }



})