// Función para manejar el inicio de sesión del administrador
function loginAdmin(event) {
    event.preventDefault();
    const loginForm = document.getElementById('loginForm');
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Comprobar si las credenciales son válidas
    const validUsername = 'admin'; // Nombre de usuario del administrador
    const validPassword = '123'; // Contraseña del administrador (cambiar por una contraseña segura)

    if (username === validUsername && password === validPassword) {
        // Redireccionar a la página de reportes si las credenciales son válidas
        window.location.href = 'admin.html';
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        loginForm.reset();
    }
}

// Evento para manejar el inicio de sesión del administrador al enviar el formulario
document.getElementById('loginForm').addEventListener('submit', loginAdmin);
