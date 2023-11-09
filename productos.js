//BD ---------------------------------
const productos = [
  {
    idProd: 1,
    idProv: 1,
    nombre: "Ceramica Piso Madera 35x35 cm",
    precio: 2600,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_803960-MLA53685693392_022023-F.webp",
  },
  {
    idProd: 2,
    idProv: 1,
    nombre: "Revestimiento Simil Piedra Ceramico Pared 36,5 x 14,5 cm",
    precio: 2400,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_818731-MLA47756653508_102021-F.webp",
  },
  {
    idProd: 3,
    idProv: 1,
    nombre: "Ceramica Manaos Verde 35x35 cm",
    precio: 3000,
    url: "https://www.puntoceramico.com.ar/306-large_default/ccn-manaos-verde-38-x-38-1-202-m2-x-c.jpg",
  },
  {
    idProd: 4,
    idProv: 1,
    nombre: "Ceramico Marmol Gris 40x40 cm",
    precio: 4900,
    url: "https://previews.123rf.com/images/prairatfhunta/prairatfhunta1705/prairatfhunta170500197/79474657-textura-de-m%C3%A1rmol-blanco-y-gris-patr%C3%B3n-natural-para-tel%C3%B3n-de-fondo-o-fondo-y-tambi%C3%A9n-se-puede.jpg",
  },
  {
    idProd: 5,
    idProv: 1,
    nombre: "Revestimiento Ceramico Pileta Venecita 36x36 cm",
    precio: 4000,
    url: "https://sanlorenzo.com.pe/wp-content/uploads/2020/06/CSL-PE-PEPELMA-IMAGEN-.jpg",
  },
  {
    idProd: 6,
    idProv: 2,
    nombre: "Latex Interior para cielo rasos 4 litros",
    precio: 28500,
    url: "https://www.minutopinturerias.com/shop/991-large_default/cielorrasos.jpg",
  },
  {
    idProd: 7,
    idProv: 2,
    nombre: "Latex Exterior 100% Acrilico 10 litros",
    precio: 180000,
    url: "https://pinturasuxell.com.ar/images/nuevas_fotos/Latexext.jpg",
  },
  {
    idProd: 8,
    idProv: 2,
    nombre: "Membrana Liquida para techos 10 litros",
    precio: 14000,
    url: "https://www.plastigas.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/2/2/220.1490.015.jpg",
  },
  {
    idProd: 9,
    idProv: 2,
    nombre: "Pintura para Maderas",
    precio: 14000,
    url: "https://images.contentstack.io/v3/assets/blt34d59f5b52e53f95/bltff491924f863ab27/652edb393b618b86bdf21443/pintura-madera.jfif",
  },
  {
    idProd: 10,
    idProv: 2,
    nombre: "Antioxido Metales Ferrosos Mate Interior Exterior 1L",
    precio: 140000,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_914877-MLA50254458802_062022-F.webp",
  },
  {
    idProd: 11,
    idProv: 3,
    nombre: "Set de llaves Tubos Racing 79 Piezas",
    precio: 98000,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_747615-MLA50108720847_052022-F.webp",
  },
  {
    idProd: 12,
    idProv: 3,
    nombre: "Taladro Electrico Percutor 550W",
    precio: 900,
    url: "https://rmac.shop/wp-content/uploads/2022/08/1-14.jpg",
  },
  {
    idProd: 13,
    idProv: 3,
    nombre: "Kit Albañil Balde Cuchara Fratacho Maza con hierro Plomada",
    precio: 17000,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_606831-MLA54434135789_032023-F.webp",
  },
  {
    idProd: 14,
    idProv: 3,
    nombre: "Carretilla Estampada Reforzada de Chapa 90 Litros",
    precio: 45000,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_792654-MLA44230253878_122020-F.webp",
  },
  {
    idProd: 15,
    idProv: 3,
    nombre: "Cinta Metrica marca Stanley 8 metros",
    precio: 9500,
    url: "https://elsoldador.com.ar/contenido/uploads/HM1501.jpg",
  },
  {
    idProd: 16,
    idProv: 4,
    nombre: "Cemento Avellaneda 50 kg",
    precio: 9500,
    url: "https://materialesandersen.com.ar/wp-content/uploads/2016/10/cemento-avellaneda-x-50-kg.jpg",
  },
  {
    idProd: 17,
    idProv: 4,
    nombre: "Ladrillo Hueco 12x18x33 9 agujeros",
    precio: 9500,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_940374-MLA47715985795_092021-F.webp",
  },
  {
    idProd: 18,
    idProv: 4,
    nombre: "Bolson Arena Fina 20kg",
    precio: 9500,
    url: "https://www.contegroup.com.ar/wp-content/uploads/2019/05/arena-fina-easy-bolsa-comprar.png",
  },
  {
    idProd: 19,
    idProv: 4,
    nombre: "Viguetas Pretensadas 3,8 mts",
    precio: 4500,
    url: "https://www.orlandisa.com/images/uploads/ecommerce/90VI999.jpg",
  },
  {
    idProd: 20,
    idProv: 4,
    nombre: "Columnas Armadas Hierros 8mm Estribos 6mm",
    precio: 9500,
    url: "https://http2.mlstatic.com/D_NQ_NP_2X_627527-MLA41989338572_052020-F.webp",
  },

];

// Recibir valores por parametros ------------------

// Obtener los parámetros de la URL
var parametros = new URLSearchParams(location.search);

const idProv = parametros.get("idProv");
//console.log("idProv: " + idProv);

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

const filtrado = productos.filter((map) => map.idProv == idProv);

filtrado.forEach((producto) => {
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
