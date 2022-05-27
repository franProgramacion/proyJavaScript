
// Creacion objetos que representan cada uno de los productos del catalogo de mi negocio. con clase constructora
// Nota 1precios desactualizados
// Nota 2 faltan añadir demas productos del catalogo que no son perfumeria

// inicio catalogo
// PENDIENTE. Debo declararlos con una clase ocnstructora 
/*
let productoPerfumeria = [
    { marca:"todoDia", producto:"perfume", precio: 2200, tipo:"", caracteristicas: "Frambuesa y pimienta rosa", descuento: false, stock: 5 },
    { marca:"todoDia", producto:"perfume", precio: 2200, tipo:"", caracteristicas: "Cereza y avellana", descuento: false, stock: 2 },
    { marca:"Aquas", producto:"perfume", precio: 2000, tipo:"Campo de violetas", caracteristicas: "Floral, moderado, violeta, gardenia, sandalo", descuento: true, stock: 1 },
    { marca:"Ekos", producto:"perfume", precio: 3500, tipo:"Flor do luar", caracteristicas: "Floral, moderado, orquidea, copaiba, priprioca", descuento: true, stock: 1},
    { marca:"Humor", producto:"perfume", precio: 3600, tipo:"Da Minha vida", caracteristicas: "", descuento: false, stock: 8 },
    { marca:"Humor", producto:"perfume", precio: 3600, tipo:"Propio", caracteristicas: "Dulce floral, moderado, cereza en almibar, ambar, vainilla", descuento: false, stock: 6 },
    { marca:"Kaiak", producto:"perfume", precio: 3500, tipo:"Aero", caracteristicas: "Aromatico, herbal, moderado, acorde tonico, salado, lavanda, peonia", descuento: false, stock: 0 },
    {marca:"Kaiak", producto:"perfume", precio: 3500, tipo:"Aventura", caracteristicas: "Floral, moderado, peonia, jazmin, notas acuosas", descuento: false, stock: 0},
    { marca:"Kriska", producto:"perfume", precio: 2700, tipo:"Drama", caracteristicas: "Dulce, intenso, nueces caramelizadas, vainilla, patchouli", descuento: true, stock: 3 },
    { marca:"Kriska", producto:"perfume", precio: 3500, tipo:"Shock", caracteristicas: "Dulce, moderado, algodón de azucar, vainilla, pimienta rosa", descuento: false, stock: 4 },
    { marca:"Luna", producto:"perfume", precio: 2000, tipo:"Rose", caracteristicas: "", descuento: true, stock: 1 },
    { marca:"Luna", producto:"perfume", precio: 2500, tipo:"Floral", caracteristicas: "", descuento: false, stock: 2 },
    { marca:"Biografia", producto:"perfume", precio: 2700, tipo:"Desperte", caracteristicas: "", descuento: false, stock: 5 },
    { marca:"Biografia", producto:"perfume", precio: 2200, tipo:"Inspire", caracteristicas: "", descuento: true, stock: 5 },
     
];

// aumenta en 5 el catalogo de los productos con menor o igual que 3

productoPerfumeria.forEach(object =>{
    if(object.stock <= 3){
        object.stock = object.stock + 5;
        console.log(object.stock);
    }
});
// Problema a resolver, quiero seleccionar el precio de los productos que tengan como descuento = true, pero me esta descontando todos los productos
productoPerfumeria.forEach(object =>{
    if(object.descuento = true && object.precio != 0){
        let desc = object.precio - (object.precio * 10 /100);
        console.log(desc);
    }
});

// Funcion para añadir nombres de personas a la lista de clientes exclusivos

const cliExc = ["Patricia", "nia", "Luciana", "Javier"]
console.log (cliExc);
cliExc.push('Andrea, Hernan, Daniela');
console.log (cliExc);


// Hacer funciones para restar catalogo ante una compra. Usando funcion splice
console.log (productoPerfumeria);
const proVend = productoPerfumeria.slice(2, 6);
console.log (proVend);
let stockFinal = productoPerfumeria - proVend;
console.log (stockFinal);


// Funcion para añadir mas productos al array

console.log (productoPerfumeria);
productoPerfumeria.push("Kaiak, Homem, Urbano");
console.log (productoPerfumeria);
  

//Para saber cuantos elementos tiene mi arreglo (Tiene 13, pero por algun motivo la consola me marca 14)

for (let index = 0; index < productoPerfumeria.length; index++) {
    console.log(productoPerfumeria[index]);
}

// Array de objetos de gastos mensuales
// 1) Se guardo dentro de una class los distintos tipos de gastos. 2) Se creo una funcion para descontar solo al producto compraInsumos 3) Se aplico una estructura for of para que recorrar todo el arreglo y aplique el descuento solo al objeto compraInsumos.
 
 class gastosMes {
    constructor(compraInsumos, impuestos, electricidad, alquiler, mantenimientoWeb, marketing, papeleria  ) {
        this.compraInsumos  = parseFloat(compraInsumos);
        this.impuestos  = parseFloat(impuestos);
        this.electricidad = parseFloat(electricidad);
        this.alquiler = parseFloat(alquiler);
        this.mantenimientoWeb  = parseFloat(mantenimientoWeb);
        this.marketing = parseFloat(marketing);
        this.papeleria = parseFloat(papeleria);
    }
    descuento() {
        this.compraInsumos = this.compraInsumos - this.compraInsumos * 10 / 100;
    }
    }
 
 const gastos = [];
gastos.push(new gastosMes(14000, 1356, 1200, 7000, 2500, 1500, 250));

for (const gastosMes of gastos)
    gastosMes.descuento();

console.log (gastos);
*/

// Productos destacados. Aqui aplico DOM para insertar ciertos productos en el HTML

// Antes de mostrar los productos destacados insertar mensaje indicando ofertas por el dia del padre
// Ejercicio desafio

// CARRITO DE COMPRA
//Primer paso (lineas 107 a 132) creo una clase constructora y coloco los productos del catalogo en un arreglo denominado prodDest

class Produc {
    constructor(nombre, precio, tipo, codigo, descripcion, imagen,) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.tipo = tipo;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.imagen  = imagen;
       
}
}

const perfHom = new Produc("Humor", 2916, "Paz e Humor", 64750,"Aromático moderado. Una fragancia innovadora, con la fuerza de las notas hervales", 
    "https://staticar.natura.com/cdn/ff/hChbWa82G-S2F2NaAvExrMIEq1hpgMYkZJsOgn7X5JE/1641343847/public/2022-01/64750_beneficiosfragancia_2.jpg");

const perfHom2 = new Produc("Kaiak", 4900, "Urbe", 34075,"Para quienes aprecian el aire libre y la naturaleza, de espíritu joven y osado.", "https://staticar.natura.com/cdn/ff/pso1TPTxNbrJpd0L3yTcZdDJgZ63vFnQce9uKmELnJs/1652746082/public/styles/medium/public/products/34075_1_18.jpg?itok=Q813EMWW");

const perfHom3 = new Produc("Urbano", 4020, "Recria", 91337 ,"Perfecto para quienes hombres de espíritu inquieto y una forma joven de encarar la vida", "https://staticar.natura.com/cdn/ff/V4cYBP9iY8IylMMTqz9de5dr5oetto4CpPGZkDZHwrw/1652733473/public/styles/medium/public/products/91337_1_19.jpg?itok=TiRR0_3o");

const desodor = new Produc("Kaiak", 975, "Corporal Urbe", 56740 ,"Desodorante masculino 100% vegetal y más fragancia.", "https://staticar.natura.com/cdn/ff/dPLk_rt_JcQLYjmzEZ1V_m1-ZfcVqG1P7kqd5tdaNHc/1652741422/public/styles/medium/public/products/56740_1_12.jpg?itok=O8AjDv2Z");

const espuma = new Produc("Natura Homem", 1315, "", 78911 ,"La Espuma de Afeitar Natura Homem proporciona una afeitada más práctica y confortable, calma la piel y la deja suave. Posee una textura más densa para mayor comodidad al afeitarse.", "https://staticar.natura.com/cdn/ff/TEM7Slc6RLJXV4mWwtP3YlI4sMJeowmFoB9GZMfxqPg/1641469071/public/2022-01/78911_beneficios_1.jpg");

const prodDest = [];
prodDest.push(perfHom, perfHom2, perfHom3, desodor, espuma);
console.log (prodDest);

// Fin primer paso

// Segundo paso (lines 137 a 152): La idea es crear constantes donde, en una estructura html ya creada, guardar tanto el catalogo de productos como el carrito de compras. Detallo con comentarios lo que guarda cada constante
let carrito = [];
const signo = '$';

// Constante itemsHtml: Selecciono mediante query la seccion items creada en el html. Aqui se ubican todo el catalogo de productos que estan en el arreglo prodDest
const itemsHtml = document.querySelector('#items');

// Constante carritoHTML: Dentro de la seccion carrito del html, se coloca la estructura creada desde js, donde se van guardando los productos seleccionados por el cliente.
const carritoHTML = document.querySelector('#carrito');

// Dentro de la constante precioTotal coloco el resultado de la funcion que suma el precio de los productos añadidos por el carrito
const precioTotal = document.querySelector('#total');

// Dentro de esta constante se guarda la funcion de vaciar carrito
const botonVaciarHTML = document.querySelector('#boton-vaciar');

// Guardo local storage en una constante, para poder reutilizarla
const miLocalStorage = window.localStorage;


// Tercer paso (lineas 158 a 194): Crear desde js la estructura html donde insertamos los productos a vender. A diferencia del paso anterior, aqui creamos la estructura HTML desde js

function catalogoProductos() {
    prodDest.forEach((info) => {
        // Creo la estructura general del card
        const card = document.createElement('div');
        card.classList.add('card', 'col-sm-4');
        // Creo el cuerpo del card
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        // Creo el titulo que correpsonde a cada producto de las tarjetas.
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = info.nombre;
        // Creacion de la imagen
        const cardImg = document.createElement('img');
        cardImg.classList.add('img-fluid');
        cardImg.setAttribute('src', info.imagen);
        // Creacion del precio
        const cardPrecio = document.createElement('p');
        cardPrecio.classList.add('card-text');
        cardPrecio.textContent = `${signo}${info.precio}`;
        // Creacion del boton
        const cardBoton = document.createElement('button');
        cardBoton.classList.add('btn', 'btn-primary');
        cardBoton.textContent = '+';
        cardBoton.setAttribute('marcador', info.codigo);
        cardBoton.addEventListener('click', añadirCarrito);
        // Insertamos dentro de la estructura general creada (card y cardBody, el titulo, imagen, precio y boton de cada producto)
        cardBody.appendChild(cardImg);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrecio);
        cardBody.appendChild(cardBoton);
        card.appendChild(cardBody);
        itemsHtml.appendChild(card);
    });
}

catalogoProductos();

//Cuarta parte: FUNCIONES
//Funcion 1: funcion para añadir productos al carrito
function añadirCarrito(evento) {
    // Añadimos el producto seleccionado a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito con los productos añadidos 
    carritoDeCompras();
    // Guardar los productos del carrito en el localStorage
    guardarCarritoEnLocalStorage();

}
// Funcion 2: Funcion que crea el carrito de compras
function carritoDeCompras() {
    // Con esto limpio el contenedor y evito duplicados
    carritoHTML.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];

    // A continuacion recorro el carrito y busco el producto seleccionado
    carritoSinDuplicados.forEach((item) => {
        const miItem = prodDest.filter((itemProdDest) => {
            return itemProdDest.codigo === parseInt(item);
        });

        //Para que se pueda seleccionar varias unidades de un mismo producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // Si el producto tiene el mismo codigo Incremento el contador en caso contrario no
            return itemId === item ? total += 1 : total;
        }, 0);

        //Aqui construyo la estructura html del carrito
        const card = document.createElement('li');
        card.classList.add('list-group-item', 'text-right', 'mx-2');
        card.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${signo}`;

        // Creo el boton que se usa para borrar el producto que ya esta agregado en el carrito y le doy su diseño
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        
        
        card.appendChild(miBoton);
        carritoHTML.appendChild(card); 
    }); 

   // Calcula el precio total
   precioTotal.textContent = calcularTotal();
}


// Funcion 3: Funcion para quitar un elemento que ya ha sido añadido al carrito

function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    carritoDeCompras();
    guardarCarritoEnLocalStorage();
}

// Funcion 4: Funcion para calcular el precio total de todos los productos añadidos en el carrito, incluyendo aquellos repetidos
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = prodDest.filter((itemProdDest) => {
            return itemProdDest.codigo === parseInt(item);
        });
        // multiplicamos producrto (por si hay varias cantidades del mismo producto) por precio
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


//Funcion 5: Vacia en su totalidad el carrito de compras. Tambien lo vacio en el localStorage

function vaciarCarrito() {
    carrito = [];
    carritoDeCompras();
    // Limpiamos el carrito en el localStorage
    localStorage.clear();
}
// Funcion 6: Funcion para guardar el carrito en el localStorage aplicando JSON
function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

// Funcion 7:  Recupera la informacion del carrito usando localStorage (para casos como recarga de la pagina)
function cargarCarritoDeLocalStorage () {
    // Con el if buscamos si existe un carrito guardado en el localstorage
    if (miLocalStorage.getItem('carrito') !== null) {
        // En caso de existir, se lo recarga en la pagina, de manera que no se pierda la informacion ante por ejemplo una caida de conexion
        // Aplico de vuelta JSON, pero en este caso, uso JSON parse
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Quinta parte: Llamar a los Eventos
botonVaciarHTML.addEventListener('click', vaciarCarrito);
cargarCarritoDeLocalStorage();
carritoDeCompras();


 
 
 





