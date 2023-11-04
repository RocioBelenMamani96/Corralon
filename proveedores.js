//BD ---------------------------------
const proveedores = [
  {
    nombre: "Corralón Don Coco",
    url: "https://lh3.googleusercontent.com/p/AF1QipPU7gcapkGYj0cGR-49i9c4Qm1wdSYZAhnSYo21=s1360-w1360-h1020",
  }, 
  {
    nombre: "Metal SRL",
    url: "https://lh3.googleusercontent.com/p/AF1QipPU7gcapkGYj0cGR-49i9c4Qm1wdSYZAhnSYo21=s1360-w1360-h1020",
  }, 
  {
    nombre: "Alum",
    url: "https://lh3.googleusercontent.com/p/AF1QipPU7gcapkGYj0cGR-49i9c4Qm1wdSYZAhnSYo21=s1360-w1360-h1020",
  }, 
  {
    nombre: "Maderas",
    url: "https://lh3.googleusercontent.com/p/AF1QipPU7gcapkGYj0cGR-49i9c4Qm1wdSYZAhnSYo21=s1360-w1360-h1020",
  }, 
];


// Lista de todos los contenedores de productos
const proveedorList = document.querySelector('.container-items');

function addItem(nombre, precio, url) {
	// Crea un elemento `div` para representar el producto en la lista.
	const div = document.createElement('div');
	div.setAttribute('class', 'item');

	div.innerHTML = `
		<figure>
			<img
				src=${url}
				alt="producto"
			/>
		</figure>
		<div class="info-product">
			<h2>${nombre}</h2>
			<button class="btn-open-products">Ver productos</button>
		</div>
	`;
	
	proveedorList.append(div);
}

proveedores.forEach((producto) => {
	addItem(producto.nombre, producto.precio, producto.url);
});



proveedorList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-open-products')) {
		location.href = "productos.html";
	}
});

