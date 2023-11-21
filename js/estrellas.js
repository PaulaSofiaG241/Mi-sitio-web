let inputBusqueda = document.getElementById("inputBusqueda");
let btnGraficar = document.getElementById("btnGraficar");
let boxEstrellas = document.getElementById("boxEstrellas");

btnGraficar.addEventListener("click", function (){
    let boxEstrella = document.createElement("i");
    boxEstrellas.appendChild(boxEstrella);
    boxEstrella.setAttribute("class", "fa-solid fa-star");

});