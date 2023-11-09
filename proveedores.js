//BD ---------------------------------
const proveedores = [
  {
	idProv: 1,
    nombre: "Reino Ceramicos",
    url: "https://http2.mlstatic.com/D_NQ_NP_622017-MLA72523211979_102023-O.webp",
  }, 
  {
	idProv: 2,
    nombre: "Paiting",
    url: "https://static.vecteezy.com/system/resources/previews/002/685/734/non_2x/painting-company-logo-design-illustration-eps-format-suitable-for-your-design-needs-logo-illustration-animation-etc-vector.jpg",
  }, 
  {
	idProv: 3,
    nombre: "Todo Obras",
    url: "https://www.zarla.com/images/zarla-todo-obras-1x1-2400x2400-20220131-krrx9mgrgdwxkggqf9gh.png?crop=1:1,smart&width=250&dpr=2",
  }, 
  {
	idProv: 4,
    nombre: "Construction Company",
    url: "https://images.examples.com/wp-content/uploads/2017/11/logo-14-.jpg",
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
		const proveedorId = proveedor.children.idProv.value;
		//console.log("idProv seleccionado : " + proveedorId);

		const elemento = proveedores.find((x) => x.idProv == proveedorId);
  
		// Generar la URL de redirección
		var urlRedireccion = "productos.html" + "?idProv=" + elemento.idProv;

		// Redireccionar a la página productos.html
		if (confirm("¿Desea abrir la página de productos para este proveedor?")) {
			//console.log("URL: "+ urlRedireccion);
			location.href = urlRedireccion;
		}
	}
});

