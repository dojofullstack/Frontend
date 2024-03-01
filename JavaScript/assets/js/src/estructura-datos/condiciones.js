


// Condiciones en JS

let edad = 20;

if (edad > 15){
    
    let usuario = 'pedro';
    console.log(usuario);

}



let frutas = ['pera', 'uvas', 'naranjas', 'manzanas'];

if (frutas.length === 3){
    
    console.log('hay 3 frutas')

} else {
    console.log('se deconoce el numero de frutas..')
}



// condiciones multiples o anidadas

if (frutas.length === 3){
    //bolque1
    console.log('hay 3 frutas')

} else if (frutas.length === 4) {
    //bolque2
    console.log('hay 4 frutas')

} else if (frutas.length >= 3) {
    //bolque3
    console.log('hay mas de 3 frutas')

} else {
        //bolque4 secundario

        console.log('hay frutas..')

}


console.log('final del programa');





//  Operadores ternarios

let puntaje = 20;

// puntaje >= 20 ?  console.log('aprobado!') :  console.log('Sigue practicando!');


const resultado = puntaje >= 20 ?  '<span> aprobado! </span>' :  '<span> Sigue practicando! </span>';

console.log(resultado);

document.getElementById('data').innerHTML = resultado;