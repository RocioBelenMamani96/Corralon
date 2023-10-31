//BD ---------------------------------
const productos = [
  {
    nombre: "Ceramica Piso Pared 35x35",
    precio: 2600,
    url: "https://ferreterialavalle.com.ar/wp-content/uploads/ceramicas.jpg",
  },
  {
    nombre: "Ladrillo Hueco de 12x18x33 cm",
    precio: 450,
    url: "https://http2.mlstatic.com/D_NQ_NP_928663-MLA51573289144_092022-O.webp",
  },
  {
    nombre: "Griferia cocina sobre mesada",
    precio: 45000,
    url: "https://bercovichsa.vtexassets.com/arquivos/ids/160239/griferia-cocina-estalgrif-zeus-mesada-1.jpg?v=637775052350200000",
  },
  {
    nombre: "Arena fina 25 kg",
    precio: 18000,
    url: "https://es.hs-bulkbags.com/uploads/202130307/building-sand-bulk-bag50188189604.jpg",
  },
  {
    nombre: "Martillo Carpintero",
    precio: 6500,
    url: "https://sodimacar.scene7.com/is/image/SodimacArgentina/115303X",
  },
  {
    nombre: "Combo Kit sanitario instalacion Baño Caño cloacal Awaduct",
    precio: 28500,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_874667-MLA69030271445_042023-F.webp",
  },
  {
    nombre: "Combo Kit sanitario instalacion Baño Caño cloacal Awaduct",
    precio: 140000,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_874667-MLA69030271445_042023-F.webp",
  },
  {
    nombre: "Combo Kit sanitario instalacion Baño Caño cloacal Awaduct",
    precio: 140000,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_874667-MLA69030271445_042023-F.webp",
  },
  {
    nombre: "Combo Kit sanitario instalacion Baño Caño cloacal Awaduct",
    precio: 140000,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_874667-MLA69030271445_042023-F.webp",
  },
  {
    nombre: "Combo Kit sanitario instalacion Baño Caño cloacal Awaduct",
    precio: 140000,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_874667-MLA69030271445_042023-F.webp",
  },
  {
    nombre: "Combo Kit sanitario instalacion Baño Caño cloacal Awaduct",
    precio: 140000,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_874667-MLA69030271445_042023-F.webp",
  },
  {
    nombre: "Combo Kit sanitario instalacion Baño Caño cloacal Awaduct",
    precio: 140000,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_874667-MLA69030271445_042023-F.webp",
  },
];

//------------------------------------

const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

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
			<p class="price">$${precio}</p>
			<button class="btn-add-cart">Añadir al carrito</button>
		</div>
	`;
	
	productsList.append(div);
}

productos.forEach((producto) => {
	addItem(producto.nombre, producto.precio, producto.url);
});

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};
