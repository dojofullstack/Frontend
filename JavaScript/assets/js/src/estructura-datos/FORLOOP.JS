


const arrayFrutas = ['uvas', 'manzanos', 'pina', 'sandia']


// for (let index = 0; index < arrayFrutas.length; index++) {

//     const element = arrayFrutas[index];
//     console.log(element);

//     if (element === 'manzanos'){
//         console.log('forzar cierre');
//         break;
//         // continue
//     }

//     console.log('iterando', index);
//     // coding execute
//     // myfunction()
    
// }


// breakpoint
// break (romper)
// continue


console.log('final del programa');






const idiomas  = ['frances', 'espanol', 'ingles', 'aleman'];


// for (let index = 0; index < idiomas.length; index++) {
//     const element = idiomas[index];
//     console.log(element);

// }



const perfil = {
    nombre: 'pedro',
    apellido: 'suarez'
}

// for (const iterator of Object.keys(perfil) ) {
//     console.log(iterator, perfil[iterator]);
// }

// for (const key in idiomas) {
//     console.log(key);
//     console.log(idiomas[key]);
// }


function procesarElemento(elemento, index){
    // if (elemento === 'xyz'){
    //     return
    // }
    console.log(elemento.toUpperCase());
    console.log('posicion', index);
}

idiomas.forEach(procesarElemento);


// idiomas.forEach( function (elemento, index) {
//     console.log(elemento.toUpperCase());
// } )


idiomas.forEach( (elemento, index) => {
    console.log(elemento.toUpperCase());
});
