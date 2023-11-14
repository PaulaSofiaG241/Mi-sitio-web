let boxProductos = document.getElementById("boxProductos");

/* Contenedor para los productos individuales */
let boxProducto = document.createElement("div");
boxProductos.appendChild(boxProducto);
boxProducto.setAttribute("class","box-producto");

/* Contenedor para la imagen */
let boxImagen = document.createElement("div");
boxProducto.appendChild(boxImagen);
boxImagen.setAttribute("class","box-imagen");
let imagenProducto = document.createElement("img");
boxImagen.appendChild(imagenProducto);
imagenProducto.setAttribute("src","imagenes/carro2.jpg");
imagenProducto.setAttribute("class","imagen-producto")

/* Contenedor para la informacion */ 
let infoProducto = document.createElement("div");
boxProducto.appendChild(infoProducto);
infoProducto.setAttribute("class","box-info-producto");

let marcaProducto = document.createElement("label");
infoProducto.appendChild(marcaProducto);
let nodoMarcaProducto = document.createTextNode("Toyota");
marcaProducto.appendChild(nodoMarcaProducto);

let marcaProducto4 = document.createElement("div");
infoProducto.appendChild(marcaProducto4);
let nodoMarcaProducto4 = document.createTextNode("Prado 2.7 Tx-l Sumo");
marcaProducto4.appendChild(nodoMarcaProducto4);


let marcaProducto2 = document.createElement("div");
infoProducto.appendChild(marcaProducto2);
let nodoMarcaProducto2 = document.createTextNode("$160.000.000");
marcaProducto2.appendChild(nodoMarcaProducto2);

let marcaProducto3 = document.createElement("div");
infoProducto.appendChild(marcaProducto3);
let nodoMarcaProducto3 = document.createTextNode("84.000 km");
marcaProducto3.appendChild(nodoMarcaProducto3);

let marcaProducto5 = document.createElement("div");
infoProducto.appendChild(marcaProducto5);
let nodoMarcaProducto5 = document.createTextNode("2014");
marcaProducto5.appendChild(nodoMarcaProducto5);

let marcaProducto6 = document.createElement("div");
infoProducto.appendChild(marcaProducto6);
let nodoMarcaProducto6 = document.createTextNode("Suba - Bogota D.C.");
marcaProducto6.appendChild(nodoMarcaProducto6);







