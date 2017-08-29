var segundo = document.getElementById("segundo");
var tercero = document.getElementById("tercero");
var cuarto = document.getElementById("cuarto");
var quinto = document.getElementById("quinto");
var sexto = document.getElementById("sexto");
var septimo = document.getElementById("septimo");
var octavo = document.getElementById("octavo");
var noveno = document.getElementById("noveno");

function mostrarSegundo() {
    segundo.style.visibility="visible";
    document.getElementById("grande").style.backgroundColor="indigo";
}

function mostrarTercero(){
    tercero.style.visibility="visible";
    quinto.style.visibility="visible";
    document.getElementById("unoB").style.backgroundColor="indigo";
}

function mostrarCuarto(){
    cuarto.style.visibility="visible";
    document.getElementById("dosB").style.backgroundColor="indigo";
    document.getElementById("dosdosB").style.backgroundColor="indigo";
}

function mostrarSexto(){
    sexto.style.visibility="visible";
    document.getElementById("tresB").style.backgroundColor="indigo";
}

function mostrarSepOctNov(){
    septimo.style.visibility="visible";
    octavo.style.visibility="visible";
    noveno.style.visibility="visible";
    document.getElementById("cuatroB").style.backgroundColor="indigo";
}
