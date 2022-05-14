
// Creacion objetos que representan cada uno de los productos del catalogo de mi negocio. con clase constructora
// Nota 1precios desactualizados
// Nota 2 faltan añadir demas productos del catalogo que no son perfumeria

// inicio catalogo
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


// Fin objetos

// Inicio funcionalides a entregar en proyecto final

// Inicio primera parte de la simulacion: pedir que ingrese el tipo de producto que le interesa al cliente

 // Funcion eleccion: funcion para seleccionar una opcion entre varias de tipos de productos
 /*
 function eleccion () {
    let num = parseInt (prompt ("Ingrese 1 para seleccionar productos de perfumeria, 2 para desodorantes, 3 para cremas para el cuerpo o 4 para jabones"))

    switch (num){
        case 1:
            alert ("Ha seleccionado la opcion de perfumeria.");
            let marca = prompt ("Ahora seleccione alguna de nuestras marcas: Kaiak, tododia, aquas, Ekos, Humor, Luna o Biografia:"); 
            switch (marca) {
                case "Kaiak":
                    alert ("Ha seleccionado nuestro producto Kaiak Aero.");
                    carro ();
                    nomProd ("Kaiak");
                    precioCompra (3500);
                return "Kaiak";
                case "tododia":
                    alert ("Ha seleccionado nuestro producto tododia");
                    carro ();
                    nomProd ("tododia");
                    precioCompra (3500);
                return "tododia";
                case "aquas":
                    alert ("Ha seleccionado nuestro producto aquas");
                    carro ();
                    nomProd ("aquas");
                    precioCompra (3500);
                return "aquas";
                case "Ekos":
                    alert ("Ha seleccionado nuestro producto Ekos");
                    carro ();
                    nomProd ("Ekos");
                    precioCompra (3500);
                return "Ekos"
                case "Humor":
                    prompt ("Ha seleccionado nuestro producto Humor");
                    carro ();
                    nomProd ("Humor");
                    precioCompra (3500);   
                return "Humor"
                case "Luna":
                    prompt ("Ha seleccionado nuestro producto Luna");
                    carro ();
                    nomProd ("Luna");
                    precioCompra (3500);
                return "Luna"
                case "Biografia":
                    prompt ("Ha seleccionado nuestro producto Biografia");
                    carro ();
                    nomProd ("Biografia");
                    precioCompra (3500);   
                return "Biografia"
            break
                        }
        case 2:
            alert ("Ha seleccionado la opcion desodorantes");
            let marcaDes = prompt ("Ahora seleccione alguna de nuestras marcas: Erva Doce, tododia, Biografia:");
            switch (marcaDes) {
                case "Erva Doce":
                    prompt ("Ha seleccionado nuestro producto Erva Doce.");
                    carro ();
                    nomProd ("Natura Erva Doce");
                    precioCompra (500);
                    return "Erva Doce";
                case "tododia":
                    prompt ("Ha seleccionado nuestro producto tododia");
                    carro ();
                    nomProd ("tododia");
                    precioCompra (400);
                    return "tododia";
                case "Biografia":
                    prompt ("Ha seleccionado nuestro producto Biografia");
                    carro ();
                    nomProd ("Natura Biografia");
                    precioCompra (3500);  
                return "Biografia";
            }
        case 3:
            alert ("Ha seleccionado la opcion cremas para el cuerpo.")
            let marcasCre = prompt("Presione 1 si desea adquirir tododia hojas de limon, 2 para Frambuesa y pimienta rosa, 3 para cereza y avellana o 4 para Flor de lis")
            switch (marcasCre) {
                case "1":
                    alert("Ha seleccionado nuestro producto tododia Hojas de limon");
                    carro ();
                    nomProd ("Hojas de Limon");
                    precioCompra (500);
                return "Hojas de limon";
                case "2":
                    alert ("Ha seleccionado nuestro producto tododia Frambuesa y pimienta rosa");
                    carro ();
                    nomProd ("tododia Frambuesa y pimienta rosa");
                    precioCompra (400);
                return "Frambuesa";
                case "3":
                    alert ("Ha seleccionado nuestro producto tododia cereza y avellana");
                    carro ();
                    nomProd ("Cereza y avellana");
                    precioCompra (500);  
                return "Cereza";
                case "4":
                    alert ("Ha seleccionado nuestro producto tododia flor de lis");
                    carro ();
                    nomProd ("flor de lis");
                    precioCompra (500);
                return "flor de lis";
                default:
                 prompt("El numero ingresado no es valido");
            break
            break
            }
        case 4:
            alert ("Ha seleccionado la opcion jabones")
            let marcasJab = prompt("Ahora escoja alguna de nuestras marcas: Ekos o Tododia")
            switch (marcasJab) {
                case "Ekos":
                    alert("Ha seleccionado nuestro producto Ekos");
                    carro ();
                    nomProd ("jabon Ekos");
                    precioCompra (800);
                return "Ekos"
                case "Tododia":
                    alert ("Ha seleccionado nuestro producto tododia");
                    carro ();
                    nomProd ("jabon Tododia");
                    precioCompra (700);
                return "Tododia" }
        default:
            prompt("El numero ingresado no es valido");
            break
    }
        } 
    */
// Fin funcion eleccion

// Inicio segunda parte de la simulacion
 // Segunda parte de la simulacion: Una funcion para añadir un producto al carrito

 /*
compra = 0;
cantProd = 0;


// Llamado de la funcion eleccion
eleccion ();

 // Funcion nomProd: funcion para añadir producto a carrito 
 
 // Funcion nomProd: funcion para añadir una lista de los productos que se incorporan al carro
 function nomProd(nombre){
    let carroCompra = "";
    carroCompra  = carroCompra + nombre;     
    } 

// Funcion carro: Funcion para preguntar si quiere unir producto a carrito

function carro (){
    
    let carrito = prompt ("¿Desea añadir el producto al carrito?");
    
    if (carrito == "si" || carrito == "SI" || carrito == "sI" || carrito == "Si") {
        totalCompra () }

    else if (carrito == "NO" || carrito == "no" || carrito == "No" ||carrito == "nO") {
        
        let masProd = prompt ("¿Deseas ver otros productos?")
         
        if (masProd == "Si" || masProd == "si" || masProd == "sI" || masProd == "SI"){
            eleccion();
        }
    
         else 
            prompt ("Muchas gracias por su visita, esperamos volver a verlo pronto!");
    }
    } 
// Fin funcion carro
// Fin segunda parte de la simulacion

// Inicio tercera parte de la simulacion

// Funcion precioCompra: para ir sumando el precio de los productos que se van a comprar
    function precioCompra (precioPro){
        let compra = 0;
        return compra + precioCompra;
}  
// Fin tercera parte de la simulacion

// Inicio cuarta parte de la simulacion

// Funcion totalCompra: Una funcion que nos brinda dos opciones cuando un producto ha sido seleccionado por el carrito: Preguntar si desea seguir agregando productos al carrito o, en caso contrario efectuar la compra del o los productos que ya tenga el carrito
      
    function totalCompra (){
        let totalProd = prompt ("¿Desea seguir comprando?");
        if (totalProd == "si" || totalProd == "SI" || totalProd == "sI" || totalProd == "Si"){
            eleccion();
        }
        else 
            prompt ("El total de su compra es de: ", compra );
    
        }   
    */    
// Fin cuarta parte de la simulacion

 
 
 





