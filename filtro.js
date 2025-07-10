const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

const li = document.getElementById('lista-de-productos');
const $i = document.querySelector('.input');
const botonDeFiltro = document.querySelector("button");

function renderProductos(lista) {
  li.innerHTML = ''; // Limpia el contenedor

  lista.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);
    li.appendChild(d);
  });
}

// Mostrar todos los productos al inicio
renderProductos(productos);

botonDeFiltro.onclick = function() {
  const texto = $i.value.toLowerCase().trim();
  const productosFiltrados = filtrado(productos, texto);
  renderProductos(productosFiltrados);
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item =>
    item.tipo.includes(texto) || item.color.includes(texto)
  );
}
