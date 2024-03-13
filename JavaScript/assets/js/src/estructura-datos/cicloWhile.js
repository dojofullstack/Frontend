

// para iterar de forma indefenido segun un estado

let isSuperadmin = true;

let respuestaUser = '';

respuestaUser = prompt('Desea contniiar?');

console.log('module While');

while (isSuperadmin && respuestaUser === 'si'){

    console.log('iterando coding', respuestaUser);

    respuestaUser = prompt('Desea continuar?');

    // if (respuestaUser === 'ejecutar break'){
    //     break;
    // }

}