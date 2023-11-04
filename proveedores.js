//BD ---------------------------------
const proveedores = [
  {
	idProv: 1,
    nombre: "Corralón Don Coco",
    url: "https://lh3.googleusercontent.com/p/AF1QipPU7gcapkGYj0cGR-49i9c4Qm1wdSYZAhnSYo21=s1360-w1360-h1020",
  }, 
  {
	idProv: 2,
    nombre: "Metal SRL",
    url: "https://lh3.googleusercontent.com/p/AF1QipPU7gcapkGYj0cGR-49i9c4Qm1wdSYZAhnSYo21=s1360-w1360-h1020",
  }, 
  {
	idProv: 3,
    nombre: "Alum",
    url: "https://lh3.googleusercontent.com/p/AF1QipPU7gcapkGYj0cGR-49i9c4Qm1wdSYZAhnSYo21=s1360-w1360-h1020",
  }, 
  {
	idProv: 4,
    nombre: "Maderas",
    url: "https://lh3.googleusercontent.com/p/AF1QipPU7gcapkGYj0cGR-49i9c4Qm1wdSYZAhnSYo21=s1360-w1360-h1020",
  }, 
];


// Lista de todos los contenedores de productos
const proveedorList = document.querySelector('.container-items');

function addItem(idProv,nombre, url) {
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
			<input type="hidden" id="idProv" value="${idProv}">
		</div>
	`;
	
	proveedorList.append(div);
}

proveedores.forEach((proveedor) => {
	addItem(proveedor.idProv,proveedor.nombre, proveedor.url);
});



proveedorList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-open-products')) {
		const proveedor = e.target.parentElement;

		//const elemento = proveedores.find((x) => x.idProv === proveedor.idProv);
		const elemento = proveedores.find((x) => x.idProv === 1);
		

		// Pasar el objeto proveedor/elemento a la página index.html
		// var parametroObjeto = elemento;
		// var parametrosJSON = JSON.stringify(parametroObjeto);
  
		// Generar la URL de redirección
		//var urlRedireccion = "productos.html" + "?parametros=" + parametrosJSON;
		var urlRedireccion = "productos.html" + "?idProv=" + elemento.idProv;

		// Redireccionar a la página productos.html
		if (confirm("¿Desea abrir la página de productos para este proveedor?")) {
			console.log("URL: "+ urlRedireccion);
			location.href = urlRedireccion;
		}
		//location.href = urlRedireccion;
		//location.href = "productos.html";
	}
});

