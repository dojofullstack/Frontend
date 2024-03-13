


// Localstorage vs Cookies

// 10 MB    vs     4KB
// las preferencias del usuario    vs   Id del usuario o token
// Objeto JSON       vs   guardar string
// permanente la data vs  caducidad




// LocalStorsge

let carrito = {
    producto: 'iphone',
    precio: 123,
    isStock: true,
    cantidad: 3
}


// para crear o guardar una key en LocalStorage primero hay que convertir a JSON
localStorage.setItem('carrito',  JSON.stringify(carrito)  );


// para leer o recuperar
let myCarrtito =  localStorage.getItem('carrito');

console.log( JSON.parse(myCarrtito));

console.log('guardadndo');


// para eliminar
localStorage.removeItem('carrito');




// Cookies 


// let fechaActual = new Date();

// // sumando 5m
// let horas = 1;
let minutos = 30;
let fechaActualMas5min = fechaActual.getTime() +  (minutos*60*1000);

fechaActual.setTime(fechaActualMas5min);


// document.cookie = `userID=121212;expires=${fechaActual.toUTCString()}`;