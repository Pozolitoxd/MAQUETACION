var ctx = document.getElementById('myChart').getContext('2d')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Hombres', 'Mujeres', 'Niños'],
        datasets: [{
            label: 'ventas',
            data: [10, 9, 15],
            borderRadius: 10,
            borderSkipped: false,
            backgroundColor: [
                'rgb(0, 147, 180)',
                'rgb(86, 0, 180)',
                'rgb(4, 180, 0)',
            ]
        }]
    }
});

const cerrarAdmin = document.getElementById('closeAdmin');
cerrarAdmin.onclick = function () {
    window.location.href = '/index.html'
}


//navegar en las diferentes seciones admin panel
const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll(".nav-button");

function mostrarSeccion(id) {
    sections.forEach(section => {
        section.classList.toggle("active", section.id === id);
    });

    navButtons.forEach(button => {
        button.classList.toggle("active", button.dataset.target === id);
    });

    history.pushState(null, null, "#" + id);
}

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.dataset.target;
        mostrarSeccion(id);
    });
});
function mostrarSeccionDesdeHash() {
    const hash = window.location.hash || "#dashboard";
    const id = hash.substring(1);
    mostrarSeccion(id);
}



document.addEventListener("DOMContentLoaded", () => {
    // PRODUCTOS
    const tablaProductos = document.getElementById("tabla-productos").querySelector("tbody");
    const btnAgregarProducto = document.querySelector("#productos .agregar-btn");

    let productoEnEdicion = null;

    btnAgregarProducto.addEventListener("click", () => {
        productoEnEdicion = null;
        limpiarModalProducto();
        new bootstrap.Modal(document.getElementById("staticBackdrop2")).show();
    });

    document.querySelector("#staticBackdrop2 .btn-guardar").addEventListener("click", () => {
        const nombre = document.getElementById("nombreProducto").value.trim();
        const cantidad = document.getElementById("cantidad").value.trim();
        const stock = document.getElementById("stock").value.trim();

        if (productoEnEdicion) {
            productoEnEdicion.cells[0].textContent = nombre;
            productoEnEdicion.cells[1].textContent = cantidad;
            productoEnEdicion.cells[2].textContent = stock;
        } else {
            const fila = tablaProductos.insertRow();
            fila.innerHTML = `
                <td>${nombre}</td>
                <td>${cantidad}</td>
                <td>${stock}</td>
                <td>${accionesHTML()}</td>
            `;
        }

        activarBotones();
        bootstrap.Modal.getInstance(document.getElementById("staticBackdrop2")).hide();
    });

    // CLIENTES
    const tablaClientes = document.getElementById("tabla-clientes").querySelector("tbody");
    const btnAgregarCliente = document.querySelector("#clientes .agregar-btn");

    let clienteEnEdicion = null;

    btnAgregarCliente.addEventListener("click", () => {
        clienteEnEdicion = null;
        limpiarModalCliente();
        new bootstrap.Modal(document.getElementById("staticBackdrop")).show();
    });

    document.querySelector("#staticBackdrop .btn-guardar").addEventListener("click", () => {
        const nombre = document.getElementById("nombrecliente").value.trim();
        const correo = document.getElementById("correoCliente").value.trim();
        const compras = document.getElementById("numeroComprasR").value.trim();

        if (clienteEnEdicion) {
            clienteEnEdicion.cells[0].textContent = nombre;
            clienteEnEdicion.cells[1].textContent = correo;
            clienteEnEdicion.cells[2].textContent = compras;
        } else {
            const fila = tablaClientes.insertRow();
            fila.innerHTML = `
                <td>${nombre}</td>
                <td>${correo}</td>
                <td>${compras}</td>
                <td>${accionesHTML()}</td>
            `;
        }

        activarBotones();
        bootstrap.Modal.getInstance(document.getElementById("staticBackdrop")).hide();
    });

    function accionesHTML() {
        return `
            <div class="content-buttons">
                <div class="button-edit">
                    <button class="Btn-edit">Editar
                     <svg class="svg" viewBox="0 0 512 512">
                                        <path
                                            d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z">
                                        </path>
                                    </svg>
                    </button>
                </div>
                <div class="button-borrar">
                    <button class="bin-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 7"
                                        class="bin-top">
                                        <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                                        <line stroke-width="3" stroke="white" y2="1.5" x2="26.0357" y1="1.5" x1="12">
                                        </line>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 39"
                                        class="bin-bottom">
                                        <mask fill="white" id="path-1-inside-1_8_19">
                                            <path
                                                d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z">
                                            </path>
                                        </mask>
                                        <path mask="url(#path-1-inside-1_8_19)" fill="white"
                                            d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z">
                                        </path>
                                        <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                                        <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 89 80"
                                        class="garbage">
                                        <path fill="white"
                                            d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z">
                                        </path>
                                    </svg>
                    </button>
                </div>
            </div>
        `;
    }

    function activarBotones() {
        document.querySelectorAll("#productos .Btn-edit").forEach(btn => {
            btn.onclick = function () {
                const fila = btn.closest("tr");
                productoEnEdicion = fila;
                document.getElementById("nombreProducto").value = fila.cells[0].textContent;
                document.getElementById("cantidad").value = fila.cells[1].textContent;
                document.getElementById("stock").value = fila.cells[2].textContent;
                new bootstrap.Modal(document.getElementById("staticBackdrop2")).show();
            };
        });

        document.querySelectorAll("#productos .bin-button").forEach(btn => {
            btn.onclick = function () {
                const fila = btn.closest("tr");
                fila.remove();
            };
        });

        document.querySelectorAll("#clientes .Btn-edit").forEach(btn => {
            btn.onclick = function () {
                const fila = btn.closest("tr");
                clienteEnEdicion = fila;
                document.getElementById("nombrecliente").value = fila.cells[0].textContent;
                document.getElementById("correoCliente").value = fila.cells[1].textContent;
                document.getElementById("numeroComprasR").value = fila.cells[2].textContent;
                new bootstrap.Modal(document.getElementById("staticBackdrop")).show();
            };
        });

        document.querySelectorAll("#clientes .bin-button").forEach(btn => {
            btn.onclick = function () {
                const fila = btn.closest("tr");
                fila.remove();
            };
        });
    }

    function limpiarModalProducto() {
        document.getElementById("nombreProducto").value = "";
        document.getElementById("cantidad").value = "";
        document.getElementById("stock").value = "";
    }

    function limpiarModalCliente() {
        document.getElementById("nombrecliente").value = "";
        document.getElementById("correoCliente").value = "";
        document.getElementById("numeroComprasR").value = "";
    }

    activarBotones(); // Inicializamos
});