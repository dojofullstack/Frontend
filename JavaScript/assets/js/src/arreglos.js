
// Tipo  de dato arrays o arreglos



let instrumentosMusicales = ['piano', 'guitarra', 'violin', 'arpa'];

console.log(instrumentosMusicales);
console.log(typeof instrumentosMusicales);

// segun su posicion o indice
instrumentosMusicales[0];
instrumentosMusicales[1];

console.log(instrumentosMusicales.length);

// push metodo para agregar nuevos elementos
instrumentosMusicales.push('flauta');
console.log(instrumentosMusicales);


let lenguajesCodigo = [
    'python',
    'javascript',
    ['django', 'express', 'react', 'angular']
]

console.log(lenguajesCodigo);

console.log(lenguajesCodigo.length);

console.log( lenguajesCodigo[2].includes('react') );

// console.log( lenguajesCodigo.sort());



let comentariosFacebook = [
    {
        body: 'hola mundo, soy jose',
        userId: 12,
        fechaPub: 12218928112121,
        faceImage: '/img/face.png'
    },
    {
        body: 'hola soy pedro',
        userId: 2,
        fechaPub: 12218928112121,
        faceImage: '/img/face2.png'
    },
    {
        body: 'hola soy Rosa',
        userId: 2,
        fechaPub: 12218928112121,
        faceImage: '/img/face2.png'
    }
]


comentariosFacebook.push(
    {
        body: 'hola soy maria',
        userId: 5,
        fechaPub: 1221892833112121,
        faceImage: '/img/face3.png'
    }
)

console.log(comentariosFacebook);


// para eliminar el primer elemenro del arreglo
// comentariosFacebook.shift();


// para eliminar el ultimo elemenro del arreglo
// comentariosFacebook.pop();


// para eliminar un elemento segun su posicion
// comentariosFacebook.splice(posicion, 1);


delete(comentariosFacebook[0])

console.log(comentariosFacebook);



comentariosFacebook[0] = {
    body: 'hola mundo, soy jose sanhcez',
    userId: 12,
    fechaPub: 12218928112121,
    faceImage: '/img/face.png'
}

console.log(comentariosFacebook);