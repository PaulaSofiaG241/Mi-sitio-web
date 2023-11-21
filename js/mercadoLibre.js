class Automovil{
    constructor(marca, modelo, precio,  kilometros, anyo, ciudad, imagen ) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.kilometros = kilometros;
        this.anyo = anyo;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}
let auto1 = new Automovil("Toyota", " Prado 2.7 Tx-l Sumo" , "$160000000", "84.000 km ·", "2014 ·",  "Suba - Bogota D.C.", "imagenes/carro2.jpg"  );
let auto2 = new Automovil("Mazda", " CX-5 Grand Touring" , "$118000000", "26.000 km ·", "2022 ·",  "Pitalito - Huila", "imagenes/carro3.jpg"  );
let auto3 = new Automovil("Mazda", " CX-5 Grand Touring" , "$118000000", "26.000 km ·", "2022 ·",  "Pitalito - Huila", "imagenes/carro3.jpg"  );
let boxProductos = document.getElementById("boxProductos");

let inputBusqueda = document.getElementById("input-busqueda");

window.addEventListener("keydown", (event) =>{
    if(event.key == "Enter"){
        if(inputBusqueda == "Mazda"){
        cargarAuto(auto1)
        cargarAuto(auto2)}

    }
});

cargarAuto(auto1);
cargarAuto(auto2);

function cargarAuto(auto){
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
imagenProducto.setAttribute("src",  ;
imagenProducto.setAttribute("class","imagen-producto")



/* Contenedor para la informacion */ 
let infoProducto = document.createElement("div");
boxProducto.appendChild(infoProducto);
infoProducto.setAttribute("class","box-info-producto");


let marcaProducto = document.createElement("label");
infoProducto.appendChild(marcaProducto);
let nodoMarcaProducto = document.createTextNode(auto.marca);
marcaProducto.appendChild(nodoMarcaProducto);
marcaProducto.setAttribute("class", "marca-producto");


let marcaProducto4 = document.createElement("label");
infoProducto.appendChild(marcaProducto4);
let nodoMarcaProducto4 = document.createTextNode(auto.modelo);
marcaProducto4.appendChild(nodoMarcaProducto4);
marcaProducto4.setAttribute("class", "modelo-producto");


let marcaProducto2 = document.createElement("div");
infoProducto.appendChild(marcaProducto2);
let nodoMarcaProducto2 = document.createTextNode(auto.precio);
marcaProducto2.appendChild(nodoMarcaProducto2);
marcaProducto2.setAttribute("class", "precio-producto");


let marcaProducto3 = document.createElement("label");
infoProducto.appendChild(marcaProducto3);
let nodoMarcaProducto3 = document.createTextNode(auto.kilometros);
marcaProducto3.appendChild(nodoMarcaProducto3);
marcaProducto3.setAttribute("class", "kilometraje");


let marcaProducto5 = document.createElement("label");
infoProducto.appendChild(marcaProducto5);
let nodoMarcaProducto5 = document.createTextNode(auto.anyo);
marcaProducto5.appendChild(nodoMarcaProducto5);
marcaProducto5.setAttribute("class", "anyo-producto");


let marcaProducto6 = document.createElement("label");
infoProducto.appendChild(marcaProducto6);
let nodoMarcaProducto6 = document.createTextNode(auto.ciudad);
marcaProducto6.appendChild(nodoMarcaProducto6);
marcaProducto6.setAttribute("class", "ciudad");
}













