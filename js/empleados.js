// Funciones para registrar y mostrar empleados
function registrarEmpleado(event) {
    event.preventDefault();
    const registroEmpleadoForm = document.getElementById('registroEmpleadoForm');
    const nombres = registroEmpleadoForm[0].value;
    const cedula = registroEmpleadoForm[1].value;
    const numeroTelefono = registroEmpleadoForm[2].value;
    const rol = registroEmpleadoForm[3].value;

    // Aquí se envían los datos del empleado al servidor para ser registrados (simulado en este ejemplo)
    // Después de registrar al empleado, se debería obtener la lista actualizada de empleados y mostrarla en la tabla
    // Pero en este ejemplo simulado, simplemente agregaremos una fila en la tabla con los datos del nuevo empleado

    // Mostrar mensaje de éxito y limpiar el formulario
    alert(`Empleado ${nombres} registrado exitosamente.`);
    registroEmpleadoForm.reset();

    // Mostrar el nuevo empleado en la tabla (esto es un ejemplo simulado)
    const empleadosTableBody = document.getElementById('empleadosTableBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nombres}</td>
        <td>${cedula}</td>
        <td>${numeroTelefono}</td>
        <td>${rol}</td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="eliminarEmpleado(this)">Eliminar</button>
        </td>
    `;
    empleadosTableBody.appendChild(newRow);
}

// Evento para manejar el registro de empleado al enviar el formulario
document.getElementById('registroEmpleadoForm').addEventListener('submit', registrarEmpleado);

// Función para eliminar un empleado de la tabla
function eliminarEmpleado(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
