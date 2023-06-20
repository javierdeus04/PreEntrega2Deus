let productosSeleccionados = []

let precioTotal = 0
let descuento = 0
let precioFinal = precioTotal

var productos = [
    {
        nombre: "Auriculares",
        precio: 30,
        stock: true
    },
    {
        nombre: "Joystick",
        precio: 100,
        stock: false
    },
    {
        nombre: "Chromecast",
        precio: 40,
        stock: false
    },
    {
        nombre: "Parlante",
        precio: 150,
        stock: true
    }
];

let opcion = parseInt(prompt("Ingrese la opcion deseada: \n 1)Agregar Productos \n 2)Agregar codigo descuento \n 3)Facturar \n 4)Buscar productos \n 5)Salir"))

const calcularPorcentaje = (precioTotal, porcentaje) => {
    descuento = (precioTotal * porcentaje)
    return descuento
}

const agregarProductos = () => {
    let opcionAgregarProductos = parseInt(prompt("Seleccione los productos deseados: \n 1)Auriculares \n 2)Joystick \n 3)Chromecast \n 4)Parlante \n 5)Ver productos seleccionados \n 6)Atras"))

    while (opcionAgregarProductos != 6) {
        switch (opcionAgregarProductos) {
            case 1:
                if (productos[0].stock) {
                    productosSeleccionados.push("Auriculares");
                    precioTotal += productos[0].precio;
                    alert("El producto Auriculares fue agregado al carrito.");
                } else {
                    alert("El producto Auriculares no está disponible en stock.");
                }
                break;
            case 2:
                if (productos[1].stock) {
                    productosSeleccionados.push("Joystick");
                    precioTotal += productos[1].precio;
                    alert("El producto Joystick fue agregado al carrito.");
                } else {
                    alert("El producto Joystick no está disponible en stock.");
                }
                break;
            case 3:
                if (productos[2].stock) {
                    productosSeleccionados.push("Chromecast");
                    precioTotal += productos[2].precio;
                    alert("El producto Chromecast fue agregado al carrito.");
                } else {
                    alert("El producto Chromecast no está disponible en stock.");
                }
                break;
            case 4:
                if (productos[3].stock) {
                    productosSeleccionados.push("Parlante");
                    precioTotal += productos[3].precio;
                    alert("El producto Parlante fue agregado al carrito.");
                } else {
                    alert("El producto Parlante no está disponible en stock.");
                }
                break;
            case 5:
                alert("Productos seleccionados:\n" + productosSeleccionados + "\nTotal: $" + precioTotal)
                break;
        }

        opcionAgregarProductos = parseInt(prompt("Seleccione los productos deseados: \n 1)Auriculares \n 2)Joystick \n 3)Chromecast \n 4)Parlante \n 5)Ver productos seleccionados \n 6)Atras"))
    }
}

const agregarCodigoDescuento = () => {
    let codigoDescuento = prompt("Ingrese codigo de descuento o ingrese 4 para volver:")

    while (codigoDescuento != 4) {
        switch (codigoDescuento) {
            case "aaa":
                precioFinal = precioTotal - (calcularPorcentaje(precioTotal, 0.10));
                alert("Precio Final: $" + precioFinal)
                return;
            case "bbb":
                precioFinal = precioTotal - (calcularPorcentaje(precioTotal, 0.20));
                alert("Precio Final: $" + precioFinal)
                return;
            case "ccc":
                precioFinal = precioTotal - (calcularPorcentaje(precioTotal, 0.30));
                alert("Precio Final: $" + precioFinal)
                return;
            default:
                alert("Codigo no valido");
                codigoDescuento = prompt("Ingrese codigo de descuento o ingrese 4 para volver:")
                break;
        }

    }
}

const facturar = () => {
    precioFinal = precioTotal - descuento;
}

const buscarProductos = () => {
    let busquedaDelUsuario = prompt("Ingrese su búsqueda").toLowerCase();
    const productosEncontrados = productos.filter(producto => producto.nombre.toLowerCase().includes(busquedaDelUsuario));

    let resultados = "Productos encontrados para su busqueda:\n";
    productosEncontrados.forEach(producto => {
        if (producto.stock) {
            resultados += 'Producto: ' + producto.nombre + ' | ' + 'Precio: ' + producto.precio + '\n';
        } else {
            resultados += 'Producto ' + producto.nombre + ' SIN stock, consulte próximamente\n';
        }
    });

    if (productosEncontrados.length > 0) {
        alert(resultados);
    } else {
        alert("No se encontraron coincidencias para su búsqueda.");
    }

    opcion = parseInt(prompt("Ingrese la opcion deseada: \n 1)Agregar Productos \n 2)Agregar codigo descuento \n 3)Facturar \n 4)Buscar productos \n 5)Salir"))
};

while (opcion != 5) {
    switch (opcion) {
        case 1:
            agregarProductos();
            break;
        case 2:
            agregarCodigoDescuento();
            break;
        case 3:
            facturar();
            alert("Sub-total: $" + precioTotal + "\n" + "Descuento: $" + descuento + "\n" + "Total a pagar: $" + precioFinal);
            break;
        case 4:
            buscarProductos();
            break;
        default:
            alert("Opcion no valida");
            break;
    }

    opcion = parseInt(prompt("Ingrese la opcion deseada: \n 1)Agregar Productos \n 2)Agregar codigo descuento \n 3)Facturar \n 4)Buscar productos \n 5)Salir"))

}


