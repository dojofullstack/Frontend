


// Tipo de dato String
let nombre = 'manuel';
let apellido = 'mesa';
let email = 'maneul@dojo.com';
let edad = '20.5';

console.log( Number(edad));
console.log(parseFloat(edad));
console.log(parseInt(edad));

console.log(nombre);


console.log(typeof nombre);

let salida = nombre + ' ' + apellido;

console.log(salida);

let nombreCompleto =  `${nombre} \n ${apellido}`;

console.log(nombreCompleto);

console.log(nombreCompleto.length);

console.log( nombreCompleto.includes('andrez'));

console.log(nombreCompleto.indexOf('manuel'));
console.log(nombreCompleto.indexOf('mesa'));

console.log(nombreCompleto.replace('henry', 'erick'));

let nombreCompletoNuevo = nombreCompleto.replace('henry', 'erick').replace('', '').replace('', '');



// Tipo de dato Number

let puntos = 10;
let precio = 10.599;

console.log(typeof puntos);
console.log(typeof precio);

let suma = puntos + 20;
let resta = puntos - 10;
let multiplicacion = puntos * 3;
let divison = puntos / 2;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(divison);


// para obtener un numero determinado de decimaniles sin modificar el valor o redondear
// let precioPromocion = 12.953
// precioPromocion.substring(0, precioPromocion.indexOf('.') + 3 );


// puntos = puntos + 20;
// puntos += 20;
// puntos -= 20;
// puntos *= 20;
// puntos /= 20;
// console.log(puntos);

console.log(precio.toFixed(2));

console.log(typeof precio.toString());


// tipo de dato booleano
// true
// false

// true representa verdadero o 1
let isAdmin = true; 

// false represanta falso o 0
let isPlanVip = false;


console.log( typeof isAdmin);
console.log( typeof isPlanVip);



// tipo de dato null
let usuario = null;
var usuarioRegistarado = null;
const usuarioEliminado = null;

// usuario = 'pedro';

console.log(usuario);
console.log(usuarioRegistarado);
console.log(usuarioEliminado);

console.log(typeof usuario);


// tipo de dato objetos o diccionarios
// forma tradicional crear para objetos
let auto = new Object();
auto.color = 'rojo';
auto.modelo = 'tesla';
auto.precio = 9999;
console.log(auto);


// forma actual y moderna de crear los objetos
let celular = {
    versioAndroid: 'lolipot',
    marca: 'xiaomi',
    color: 'celeste',
    precio: 123,
    configuracion: {
        modoRoot: true,
        memory: '3GB',
        nameCPU: 'Troll'
    }
}

console.log(celular);

// operacion READ
console.log(celular.marca);
console.log(celular.color);
console.log(celular.precio);

console.log(celular['precio']);


// operacion Write (para actualizar y para crear propuedades)

celular.marca = 'iphone';
celular.color = 'black';
celular.precio = 9999;
// celular.pulgadas = '6,7p';

celular['pulgadas'] = '6,7p';

console.log(celular);


// operacion para eliminar claves
delete celular['precio'];

console.log(celular);


console.log(typeof celular);


console.log( celular.configuracion.modoRoot);
console.log( celular.configuracion.memory);

celular.configuracion.memory = '12 GB';

console.log(celular);
