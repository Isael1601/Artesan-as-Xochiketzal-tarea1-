console.log("Artesanias Xochiketzal")

const nombre = document.getElementById('nombre')

const apellido = document.getElementById('apellido')

const numero = document.getElementById('numero')

const correo = document.getElementById('mail')

const pedido = document.getElementById('pedido')

const cotizacion = document.querySelector('#enviar')

let arr = [];

cotizacion.addEventListener('click', () => {
    arr.push('nombre:' + nombre.value + apellido.value + 'telefono:' + numero.value + 'correo:' + mail.value  + 'pedido:' + pedido.vale)
    arr.innerHTML = ''
    console.log(arr)
    localStorage.setItem('comentario', arr)
})

function agregarCotizacion() {
    const lista = document.getElementById('cotizacion')
    arr.forEach( function (item, i) { 
            lista.innerHTML += `
            <li>
                ${item}
                <button onclick="borrarElemento(${i})">X</button>
            </li>    
            `
    })
}





