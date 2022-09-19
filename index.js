let productos = []
let carrito =[]
const selecTag = document.getElementById('lista')

const plumeti ={
    nombre: 'plumeti',
    precio: 950
}
productos.push(plumeti)

const encaje = {
    nombre: 'encaje',
    precio: 950
}
productos.push(encaje)

const terciopelo = {
    nombre: 'terciopelo',
    precio: 1250
}
productos.push(terciopelo)

const encajeAro = {
    nombre: 'encajeAro',
    precio: 1000
}
productos.push(encajeAro)

console.log(productos);

productos.forEach(producto=>{
    const option = document.createElement('option')
    option.innerText = `${producto.nombre}: ${producto.precio}$`
    selecTag.append(option)
})

const boton = document.createElement('button')
boton.innerText = 'Agregar producto'
document.body.append(boton)

const boton2 = document.createElement('button')
boton2.innerText = 'Terminar compra'
document.body.append(boton2)



boton.onclick = ()=>{
    const productoSeleccionado = productos[selecTag.selectedIndex]
    carrito.push(productoSeleccionado)
}

boton2.onclick = ()=>{
    let totalCompra = 0
    carrito.forEach((prod)=>{
        totalCompra = totalCompra + prod.precio
    })

    let pagoEfectivo = totalCompra - totalCompra*(10/100)

    const parrafoTotal = document.createElement('p')
    parrafoTotal.innerText = `Pagando con tarjeta de credito, debito o mercado pago el valor total es de $${totalCompra}, y pagando con transferencia o efectivo el valor total es de $${pagoEfectivo}!!`
    document.body.append(parrafoTotal)
 

}

