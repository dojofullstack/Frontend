


// creando funciones JS
// contiene un bloque de codigo o multiples intrucciones y a la esperar de ser ejecutado.

function maquinaNaranjas(numero_naranjas, con_azucar, con_hielo='si') {
    console.log('preparando jugo de naranjas', numero_naranjas);

    if (con_azucar){
        console.log('agregando azucar al jugo');
        return 'jugo completado con azucar';

    } else {
        console.log('sin azucar, natural...');
    }

    if (con_hielo === 'si'){
        console.log('Agregar hielo!!!');
        return 'jugo completado con hielo';
    } else {
        console.log('Sin hielo!!!');
    }

    return true;
}


// const salidaJugo =  maquinaNaranjas(10, false);

// console.log(salidaJugo);

// if (salidaJugo){
//     console.log('Su jugo esta servido....');
// } else {
//     console.log('Su jugo se esta preparando aun....');
// }




// trabajando con callbacks


function acelerarAuto(){
    console.log('acelerando auto');
}

function frenarAuto(){
    console.log('frenanado auto');
}


function inicarCarreraAutos(nombre, callback1, callback2, callback3 ,velocidad ){
    console.log('iniciando carrera', nombre);

    if (velocidad >= 100){
        callback1();
    } else {
        callback2();
    }

    callback3('hola Tesla!', 'jose');

}



let autoModelo = 'Tesla';

inicarCarreraAutos('Erick', frenarAuto, acelerarAuto, function (saludo, nombre){
    console.log(saludo, nombre);
    alert('iniciando carrera');
} , 30, );


const salidaFuncionAuto = function (saludo, nombre){
    console.log('iniciando salidaFuncionAuto');
}


salidaFuncionAuto();