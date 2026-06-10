function mostrarAlerta () {
    alert('Hola desde el boton')
}

function agregarProducto () {
    const lista = document.getElementById('lista-productos1')
    const nuevoProducto = document.createElement('li')
    nuevoProducto.textContent = 'Nuevo producto';
    lista.appendChild (nuevoProducto)
}

document.getElementById('btn3').addEventListener('click', () => {
    const lista2 = document.getElementById('lista-productos2')
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = 'Nuevo producto desde listener';
    lista2.appendChild (nuevoProducto)
})

document.getElementById('btn4').addEventListener('click', () => {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Texto modificado desde el boton";
        
    console.log("Mensaje:", mensaje);
    }
)


document.getElementById('campo').addEventListener('input', () => {
    console.log('Valor del campo: ', document.getElementById('campo').value);
});

document.getElementById('campo')
    .addEventListener('input', () => {
    const valorCampo = document
    .getElementById('campo_actualizar_texto').value;
    document.getElementById('campo')
        .textContent = 
        `Valor actualizado: ${valorCampo} `;
});


