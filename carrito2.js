document.addEventListener('DOMContentLoaded', mostrarCarrito)
//funcion para mostrar los productos al carrito
function mostrarCarrito(){

    let carrito = JSON.parse(localStorage.getItem('carrito')) ||[]
    let listaCarrito = document.getElementById('lista-carrito')

listaCarrito.innerHTML = ''
 carrito.forEach((producto, index) => {
    let li = document.createElement('li')
    li.textContent = `${producto.nombre}
    ${producto.precio}`
 
    //boton para borra el producto
    let botonBorrar = document.createElement('button')
    botonBorrar.textContent = 'Borrar'
    botonBorrar.addEventListener('click',()  => 
      {
        borrarProducto(index)
    })
    li.appendChild(botonBorrar)

    listaCarrito.appendChild(li)
})
}
//funciom para borra un producto
function borrarProducto(index){
    let carrito = JSON.parse(localStorage.getItem
    ('carrito')) ||[]
    carrito.splice(index, 1)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    mostrarCarrito()
}
// funcion para completar compra y variar al carrito
function completarCompra(){
    //pueden agregar cualquier logica que deseem para prosesar la compra
    alert('¡compra completada con exito!gracias por su compra vuelva pronto')
    localStorage.removeItem('carrito')//vaciar carrito

    mostrarCarrito()//actualizar la listade carrito
}