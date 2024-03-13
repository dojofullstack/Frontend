


// integrando paquetes de terceros
// integrando paquetes nativos fetch


console.log('modulo librerias.js');


// fetch('https://dummyjson.com/products')
// .then( res => res.json() )
// .then((data) => {
    
//     console.log('la data del server es:',data);

//     console.log(data.products);

// } );



// formulario web
// fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'kminchelle',
//     password: '0lelplR',
//     // expiresInMins: 60, // optional
//   })
// })
// .then(res => res.json())
// .then( data => console.log(data));




// peticinons API GET / POST con axios

function mostrarProductos(productosTotal){
    // console.log(PRODUCTOS);
    let produstosHTML = '';


    function generarCardHTML(item) {
        let producto = '';
        producto = `
        <div class="card" style="width: 18rem;">
      <img src="${item.images[0]}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">Precio: ${item.price}</p>
        <a href="#" class="btn btn-primary">Ir a Whastaspp</a>
        <i onclick="eliminarProducto('${item.id}')" class="bi bi-trash-fill" style='font-size: 25px; color: red' ></i>
      </div>
    </div>`;
        produstosHTML += producto;
    } 


    productosTotal.forEach(generarCardHTML);
    document.querySelector('#catalogo_productos').innerHTML = produstosHTML;
}



axios.get('https://dummyjson.com/products').then( (data) => {
    const productos = data.data.products;
    console.log(productos);

    mostrarProductos(productos);

} )



const credenciales = {
    username: 'kminchelle',
    password: '0lelplR',
  }



axios.post('https://dummyjson.com/auth/login', credenciales).then( (data) => {
    console.log(data.data);
} )