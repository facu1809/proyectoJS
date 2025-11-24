
// Funcion de bienvenida 
function saludar(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido);
}

let nombreUser = prompt("Ingrese su nombre");
let apellidoUser = prompt("Ingrese su apellido");
alert ("Hola " + nombreUser + " " + apellidoUser + " " + " Bienvenido a ALLTIME")

saludar(nombreUser, apellidoUser);




let iniciar = confirm ("¿Quieres comprar relojes?")





// Array relojes
let relojes = [
  { marca: "Casio", precio: 5000 },
  { marca: "Rolex", precio: 10000 },
  { marca: "Omega", precio: 15000 }
];

// Carrito vacío
let carrito = [];

// Función principal
function tiendaRelojes() {
  let opcion = "";

  while (opcion !== "3") {
    opcion = prompt(
      "TIENDA DE RELOJES\n" +
      "1 - Ver relojes disponibles\n" +
      "2 - Agregar un reloj al carrito\n" +
      "3 - Salir"
    );

    if (opcion === "1") {
      let mensaje = "Relojes disponibles:\n";
      for (let i = 0; i < relojes.length; i++) {
        mensaje += (i + 1) + " - " + relojes[i].marca + " ($" + relojes[i].precio + ")\n";
      }
      alert(mensaje);
    }

    else if (opcion === "2") {
      let marca = prompt("Escribe la marca del reloj que querés (Casio, Rolex, Omega):");

      // Buscar reloj por marca
      let encontrado = relojes.find(r => r.marca.toLowerCase() === marca.toLowerCase());

      if (encontrado) {
        carrito.push(encontrado);
        alert("Agregado al carrito: " + encontrado.marca);
      } else {
        alert("Esa marca no existe.");
      }
    }

    else if (opcion === "3") {
      alert("Gracias por visitar la tienda.");
    }

    else {
      alert("Opción incorrecta, intenta nuevamente.");
    }
  }

  console.log("Carrito final:", carrito);
}

// Ejecutar tienda
tiendaRelojes();
