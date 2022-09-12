let nombre = prompt('Ingresa tu nombre')

let total = 0

let seleccionarProducto = parseInt(prompt('Hola ' + nombre + ', ingresa el numero del producto que deseas agregar al carrito: 1.Conjunto de terciopelo  2.Conjunto de plumeti  3.Conjunto de encaje  4.Conjunto de encaje con aro'))

let comprar = true
let decicion
let productos = []
let carrito = []

const terciopelo = {
    nombre: 'terciopelo',
    precio: 1250
}
productos.push(terciopelo)

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

const encajeAro = {
    nombre: 'encajeAro',
    precio: 1000
}
productos.push(encajeAro)


while (comprar === true) {
    if (seleccionarProducto === 1) {
        carrito.push(productos[0])
    }
    else if (seleccionarProducto === 2) {
        carrito.push(productos[1])
    }
    else if (seleccionarProducto === 3) {
        carrito.push(productos[2])
    }
    else if (seleccionarProducto === 4) {
        carrito.push(productos[3])
    }
    else {
        seleccionarProducto = parseInt(prompt('El numero ingresado no pertenece a un producto existente, por favor ingresa nuevamente el numero del producto que desea agregar al carrito: 1.Conjunto de terciopelo  2.Conjunto de plumeti  3.Conjunto de encaje  4.Conjunto de encaje con aro'))
        continue
    }
    
    decicion = parseInt(prompt('Deseas agregar mas productos al carrito? 1.Si  2.no'))
    if (decicion === 1) {
        seleccionarProducto = parseInt(prompt('ingresa el numero del producto que desea agregar al carrito: 1.Conjunto de terciopelo  2.Conjunto de plumeti  3.Conjunto de encaje  4.Conjunto de encaje con aro'))
    }else if (decicion ===2) {
        comprar = false
    }
}


for (let i = 0; i < carrito.length; i++) {
    total = total + carrito[i].precio
}

alert('Pagando con tarjeta de credito, debito o mercado pago el valor total es de $'+total)

function calcularPagoEfectivo(valor) {
    let pagoEfectivo = total*(10/100)
    valor = valor - pagoEfectivo
    return valor
}
let pagoEfectivo = calcularPagoEfectivo(total)

alert('Pagando con transferencia o efectivo el valor total es de $'+pagoEfectivo+'!!')

alert('Muchas gracias por comprar nuestros productos. Espramos que vuelvas pronto!')