

const PRODUCTOS = [];


function crearProducto(){

    const producto = document.querySelector('#producto');
    const precio = document.querySelector('#precio');
    const imagen = document.querySelector('#imagen');
    const sku = document.querySelector('#sku');


    const productoConfig = {
        producto: producto.value,
        precio: precio.value,
        imagen: imagen.value,
        sku: sku.value,
    }
    console.log(productoConfig);

    PRODUCTOS.push(productoConfig);


    document.querySelector('#btn_close').click();


    mostrarProductos();



}




function mostrarProductos(){
    console.log(PRODUCTOS);

    
  

    let producto = '';
    let produstosHTML = '';

    PRODUCTOS.forEach( function (item) {
        
        producto = `
        <div class="card" style="width: 18rem;">
      <img src="${item.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.producto}</h5>
        <p class="card-text">Precio: ${item.precio}</p>
        <a href="#" class="btn btn-primary">Ir a Whastaspp</a>
      </div>
    </div>`;

        produstosHTML += producto;

    } )



    document.querySelector('#catalogo_productos').innerHTML = produstosHTML;



}
