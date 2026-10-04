// Simulador de Mantenimiento de Auto

const pedirDato = (mensaje) => prompt(mensaje);

function obtenerMantenimiento(kilometros) {
    if (kilometros <= 50000) {
        return "Mantenimiento básico: aceite y filtros.";
    } else if (kilometros <= 100000) {
        return "Mantenimiento intermedio: kit distribución y bomba de agua.";
    } else if (kilometros <= 150000) {
        return "Mantenimiento avanzado: revisión completa del motor.";
    } else if (kilometros <= 200000) {
        return "Mantenimiento especial: rotación de neumáticos, alineación y balanceo.";
    } else {
        return "Mantenimiento completo: revisión general del auto.";
    }
}

function obtenerPrecio(opcion) {
    switch (opcion) {
        case "1":
            return 5000;
        case "2":
            return 10000;
        case "3":
            return 15000;
        case "4":
            return 20000;
        case "5":
            return 25000;
        default:
            return 0;
    }
}

function mostrarResultado(mensaje) {
    alert(mensaje);
    console.log(mensaje);
}

// SIMULADOR PRINCIPAL

mostrarResultado("¡Bienvenido al simulador de mantenimiento!");

let continuar = true;

while (continuar) {
    let kilometros = parseInt(pedirDato("¿Cuántos km tiene tu auto?"));
    console.log("Kilómetros ingresados: " + kilometros + " km");
    if (isNaN(kilometros) || kilometros < 0) {
        mostrarResultado("Ingresá un número de kilómetros válido.");
    } else {
        let mantenimiento = obtenerMantenimiento(kilometros);
        mostrarResultado(mantenimiento);
    }
    
    let opcion = pedirDato("Conocé el precio del tipo de mantenimiento:\n1 - Básico\n2 - Intermedio\n3 - Avanzado\n4 - Especial\n5 - Completo\n6 - Salir");
    console.log("Opción elegida: " + opcion);
    if (opcion === "6") {
        continuar = false;
        console.log("El usuario eligió salir");
    } else {
        let precio = obtenerPrecio(opcion);
        if (precio > 0) {
            mostrarResultado("El precio del mantenimiento elegido es de $" + precio + ".");
        } else {
            mostrarResultado("Opción no válida.");
        }
    }
    
    if (continuar) {
        continuar = confirm("¿Desea continuar con el simulador?");
        console.log("Continuar con el simulador: " + continuar);
    }
}

mostrarResultado("¡Gracias por usar el simulador!");
console.log("Simulador finalizado");