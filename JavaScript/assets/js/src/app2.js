


let parrafo = document.getElementById('parrafo');

console.log(parrafo);

parrafo.style.padding = '20px';
parrafo.style.backgroundColor = 'purple';
parrafo.style.color = 'white';
parrafo.style.fontSize = '30px';

parrafo.innerHTML = '<span> nuevo valor </span>';


const botonesCompra = document.getElementsByClassName('boton-tienda');

console.log(botonesCompra[0]);

console.log(botonesCompra[1]);

botonesCompra[1].style.backgroundColor = 'green';
botonesCompra[1].style.padding = '10px 20px';
botonesCompra[1].innerHTML = 'Ahoorar masss!';



// similar al selector CSS
let imagen = document.querySelector('.my-image');
let imagenes = document.querySelectorAll('.my-image');



console.log(imagen);
imagen.style.height = '70px';
imagen.style.borderRadius = '30px';

console.log(imagenes);


let imagenDojo = document.querySelector('#imagenDojo');

imagenDojo.style.height = '300px';


let btnPrimary = document.querySelector('.contenedor div button.btn-primary');

btnPrimary.style.backgroundColor = 'pink';


// btnPrimary.addEventListener('click', function mostrarAlerta() {
//     alert('hackenadno facebook!!!');
// } )

console.log(btnPrimary);