



// iteradores map y ForEach


const personajesComic = [
    'batman',
    'spiderman',
    'Hulk',
    'ironMan'
]


function insertarPersonajesDom(personaje){
    console.log(personaje);
    // return `${personaje} con superPoder`;
}

// personajesComic.forEach(insertarPersonajesDom);

personajesComic.forEach(function (personaje) {
    console.log(personaje.toUpperCase());
});

// console.log(salida);


// const salida =  personajesComic.map(insertarPersonajesDom);
// console.log(salida);




