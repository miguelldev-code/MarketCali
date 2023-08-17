<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrar empleados - MarketCali</title>
    <link rel="shortcut icon" href="src/logo.png" />
    <!-- Enlace a los estilos de Bootstrap (CDN) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <header class="bg-primary text-white py-3">
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
            <div class="container">
                <a href="index.html" class="navbar-brand">
                    <img src="src/logo.png" alt="MarketCali Logo" class="me-2 img-thumbnail">
                    MarketCali
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="admin.html" class="nav-link">Regresar</a>
                        </li>                
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main class="py-4">
        <section class="container">
            <h2 class="mb-4">Administrar Empleados</h2>
            <form id="registroEmpleadoForm">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre del Empleado</label>
                    <input type="text" class="form-control" id="nombre" required>
                </div>
                <div class="mb-3">
                    <label for="cargo" class="form-label">Cargo</label>
                    <input type="text" class="form-control" id="cargo" required>
                </div>
                <div class="mb-3">
                    <label for="edad" class="form-label">Edad</label>
                    <input type="number" class="form-control" id="edad" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <button type="submit" class="btn btn-primary">Registrar Empleado</button>
            </form>
        </section>
    </main>

    <?php
    // Este archivo PHP manejará la funcionalidad de administración de empleados

    // Incluir aquí la lógica para conectarte a tu base de datos
    // y realizar operaciones relacionadas con los empleados

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Recuperar datos del formulario
        $nombre = $_POST["nombre"];
        $cargo = $_POST["cargo"];
        $edad = $_POST["edad"];
        $email = $_POST["email"];

        // Realizar operaciones de inserción en la base de datos o cualquier otra lógica necesaria

        // Ejemplo de respuesta JSON para indicar éxito
        $response = array("success" => true, "message" => "Empleado registrado exitosamente.");
        echo json_encode($response);
    } else {
        // Si la solicitud no es POST, redirigir u ofrecer alguna respuesta adecuada
        $response = array("success" => false, "message" => "Solicitud no válida.");
        echo json_encode($response);
    }
    ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
    <script src="/js/admin_empleados.js"></script>
</body>

</html>