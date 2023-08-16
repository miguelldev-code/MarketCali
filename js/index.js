// Función para obtener productos destacados (simulación de datos)
function getProductosDestacados() {
    return [
        { id: 1, nombre: 'Producto Destacado 1', seccion: 'Electrónica', imagen: 'imagen1.jpg', precio: 99.99, stock: 15 },
        { id: 2, nombre: 'Producto Destacado 2', seccion: 'Ropa', imagen: 'imagen2.jpg', precio: 49.50, stock: 8 },
        { id: 3, nombre: 'Producto Destacado 3', seccion: 'Hogar', imagen: 'imagen3.jpg', precio: 79.90, stock: 20 }
    ];
}

// Función para mostrar los productos destacados en el index.html
function mostrarProductosDestacados() {
    const productosDestacadosList = document.getElementById('productosDestacadosList');
    const productosDestacados = getProductosDestacados();

    // Mostrar los productos destacados en filas en el index.html
    productosDestacadosList.innerHTML = '';
    let currentRowDiv;
    productosDestacados.forEach((producto, index) => {
        if (index % 3 === 0) {
            // Crear una nueva fila después de cada 3 productos para que se muestren en filas
            currentRowDiv = document.createElement('div');
            currentRowDiv.classList.add('row');
            productosDestacadosList.appendChild(currentRowDiv);
        }

        const columnDiv = document.createElement('div');
        columnDiv.classList.add('col-md-4', 'mb-3');
        columnDiv.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Sección: ${producto.seccion}</p>
                    <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                    <p class="card-text">Stock: ${producto.stock}</p>
                </div>
            </div>
        `;

        // Agregar el producto destacado a la fila actual
        currentRowDiv.appendChild(columnDiv);
    });
}

// Función para obtener las últimas ventas (simulación de datos)
function getUltimasVentas() {
    return [
        { id: 1, producto: 'Producto Destacado 1', cantidad: 3, total: 299.97 },
        { id: 2, producto: 'Producto Destacado 2', cantidad: 1, total: 49.50 }
    ];
}

// Función para mostrar las últimas ventas en el index.html
function mostrarUltimasVentas() {
    const ultimasVentasList = document.getElementById('ultimasVentasList');
    const ultimasVentas = getUltimasVentas();

    // Mostrar las últimas ventas en lista en el index.html
    ultimasVentasList.innerHTML = '';
    ultimasVentas.forEach(venta => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `
            <p>Producto: ${venta.producto}</p>
            <p>Cantidad: ${venta.cantidad}</p>
            <p>Total: $${venta.total.toFixed(2)}</p>
        `;
        ultimasVentasList.appendChild(listItem);
    });
}

// Mostrar productos destacados y últimas ventas al cargar la página
mostrarProductosDestacados();
mostrarUltimasVentas();

