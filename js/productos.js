// Variable global para almacenar los productos registrados
let productosRegistrados = [];

// Función para mostrar los productos registrados en la página
function mostrarProductosRegistrados() {
    const productosList = document.getElementById('productosList');

    // Mostrar los productos registrados como cartas
    productosList.innerHTML = '';
    productosRegistrados.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-md-4', 'mb-3');
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Sección: ${producto.seccion}</p>
                <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                <p class="card-text">Stock: ${producto.stock}</p>
            </div>
        `;
        productosList.appendChild(card);
    });
}

// Función para registrar un nuevo producto
function registrarProducto(event) {
    event.preventDefault();

    const registroProductoForm = document.getElementById('registroProductoForm');
    const nombre = registroProductoForm.nombre.value;
    const seccion = registroProductoForm.seccion.value;
    const imagen = registroProductoForm.imagen.value;
    const precio = parseFloat(registroProductoForm.precio.value);
    const stock = parseInt(registroProductoForm.stock.value);

    const nuevoProducto = {
        nombre: nombre,
        seccion: seccion,
        imagen: imagen,
        precio: precio,
        stock: stock
    };

    // Agregar el nuevo producto a la lista de productos registrados en memoria
    productosRegistrados.push(nuevoProducto);

    // Mostrar la lista actualizada de productos en la página (productos.html)
    mostrarProductosRegistrados();

    // Limpiar el formulario
    registroProductoForm.reset();

    // Enviar los productos registrados a index.html mediante el objeto 'message'
    window.parent.postMessage({ productosRegistrados: productosRegistrados }, '*');
}

// Asignar la función registrarProducto al evento submit del formulario
document.getElementById('registroProductoForm').addEventListener('submit', registrarProducto);

// Mostrar los productos registrados al cargar la página
mostrarProductosRegistrados();
