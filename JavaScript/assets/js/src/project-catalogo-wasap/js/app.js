

let PRODUCTOS = [];


function crearProducto(evento){
    // pausar envio de datos del formulario

    try {
        evento.preventDefault();
    } catch {
        console.log('sin event formulario');
    }


    const producto = document.querySelector('#producto');
    const precio = document.querySelector('#precio');
    const imagen = document.querySelector('#imagen');
    const sku = document.querySelector('#sku');

    if (sku.value === ''){
        alert('ingresa el SKU del producto');
        return
    }


    const productoConfig = {
        producto: producto.value,
        precio: precio.value,
        imagen: imagen.value,
        sku: sku.value,
    }
    // console.log(productoConfig);

    PRODUCTOS.push(productoConfig);


    document.querySelector('#btn_close').click();


    mostrarProductos(PRODUCTOS);



}








// refactorizar funcion
function mostrarProductos(productosTotal){
    // console.log(PRODUCTOS);
    let produstosHTML = '';


    function generarCardHTML(item) {
        let producto = '';
        producto = `
        <div class="card" style="width: 18rem;">
      <img src="${item.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.producto}</h5>
        <p class="card-text">Precio: ${item.precio}</p>
        <a href="#" class="btn btn-primary">Ir a Whastaspp</a>
        <i onclick="eliminarProducto('${item.sku}')" class="bi bi-trash-fill" style='font-size: 25px; color: red' ></i>
      </div>
    </div>`;
        produstosHTML += producto;
    } 


    productosTotal.forEach(generarCardHTML);


    document.querySelector('#catalogo_productos').innerHTML = produstosHTML;

}



function buscadorProductos(){


    const nameProduct = document.querySelector('#input-buscar').value;
    console.log('nameProduct', nameProduct);


    let productosFiltrado = [];


    function buscador(producto){
        if (producto.producto.toLowerCase().includes(nameProduct.toLowerCase()) ){
            console.log('producto encontrado');
            productosFiltrado.push(producto);
        } else {
            console.log('buscando..');
        }
    }



    PRODUCTOS.forEach(buscador);


    mostrarProductos(productosFiltrado);

}



function eliminarProducto(sku){
   
    // 2 formas para eliminar elementos de un arrray
    // splice(posicoin, 1)  y  filter();


    // let posicionProduct = 0;
    // PRODUCTOS.forEach(function (elemento, posicion) {
    //         // console.log(elemento.sku, sku);
    //         if (Number(elemento.sku) === Number(sku)){
    //             // console.log('producto econtrado y borrando', posicion);
    //             posicionProduct = posicion;
    //         } else {
    //             console.log('no encontrado');
    //         }
    // }  )

    // PRODUCTOS.splice(posicionProduct, 1);


    PRODUCTOS = PRODUCTOS.filter((producto) => {
        if (producto.sku.toString() === sku.toString()){
            return false;
        } else {
            return true;
        }
    } )


    console.log(PRODUCTOS);



    mostrarProductos(PRODUCTOS);



}






const login = () => {


    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    const data = {
        username: username.value,
        password: password.value,
    }

    axios.post('https://dummyjson.com/auth/login', data).then(data => {
        const infoUser = data.data;
        const token = infoUser.token;

        // configuramdo caducidad luego de 30m
        let minutos = 30;
        let fechaActual = new Date();
        let fechaActualCaducidad = fechaActual.getTime() +  (minutos*60*1000);
        fechaActual.setTime(fechaActualCaducidad);

        document.cookie = `token=${token};expires=${fechaActualCaducidad}`;


        delete infoUser['token'];

        localStorage.setItem('infoUser', JSON.stringify(infoUser));


        location.href = '/assets/js/src/project-catalogo-wasap/index.html';


    
    })

}




function loadProfile() {

    const token = document.cookie.split(';')[0];
    console.log(token);
    if (token.includes('token=')){
        console.log('token presentae');
        // paso adicional verificar si es valido

        let infoUser = localStorage.getItem('infoUser');
        infoUser = JSON.parse(infoUser);
        console.log(infoUser.firstName);
        console.log(infoUser.image);


        document.querySelector('#username').innerHTML = infoUser.firstName;
        document.querySelector('#usernameImg').src = infoUser.image;


    } else {
        console.log('no hay sesion, entonces iniciar seison');
        location.href = '/assets/js/src/project-catalogo-wasap/login.html';
    }

}


