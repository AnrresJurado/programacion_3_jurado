const campoTarea = document.getElementById('campo_tarea');
const botonAgregar = document.getElementById('btn_agregar');
const listaTareas = document.getElementById('lista_tareas');

botonAgregar.addEventListener('click', function() {
    const tarea = campoTarea.value.trim();
    if (tarea !== '') {
        const li = document.createElement('li');
        li.textContent = `🚛 ${tarea}`;
        li.style.padding = "5px 0";
        listaTareas.appendChild(li);
        campoTarea.value = ''; 
    }
});