function saludar(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido);
}

let nombreUser = prompt("Ingrese su nombre");
let apellidoUser = prompt("Ingrese su apellido");
alert ("Hola " + nombreUser + " " + apellidoUser + " " + " Bienvenido a ALLTIME")

saludar(nombreUser, apellidoUser);

let iniciar = confirm ("¿Quieres comprar relojes?")

// Traer carrito del localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar carrito
function guardar() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto
function agregar(marca, precio) {
  carrito.push({ marca, precio });
  guardar();
  mostrar();
}
console.log (carrito)

// Mostrar carrito
function mostrar() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = "";

  carrito.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = producto.marca + " - $" + producto.precio;
    lista.appendChild(li);
  });
}

// Vaciar carrito
function vaciar() {
  carrito = [];
  localStorage.removeItem("carrito");
  mostrar();
}

// Mostrar al cargar la página
mostrar();
