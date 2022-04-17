console.log('Artesanias Xochiketzal')

const inputComentario = document.getElementById('comentario')

const btnAgregar = document.querySelector('#botones')

let arr = [];

btnAgregar.addEventListener('click', () => {
    arr.push(inputComentario.value)
    inputComentario.innerHTML = ''
    console.log(arr)
    localStorage.setItem('comentario', arr)
    agregarComentario()
})

function agregarComentario() {
    const lista = document.getElementById('comentarios-emitidos')
    arr.forEach( function (item, i) { 
            lista.innerHTML += `
            <li>
                ${item}
                <button onclick="borrarElemento(${i})">X</button>
            </li>    
            `
    })
}

function borrarElemento(posicion) {
    console.log(posicion)
}