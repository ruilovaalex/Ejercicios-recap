"use strict";

let numero = prompt("Ingresa un número:");
if (numero >= 10) {
 if (numero <= 20) {
        alert("El número " + numero + " está entre 10 y 20.");
    } else {
        alert("El número " + numero + " no está entre 10 y 20.");
    }
} else {
    alert("El número " + numero + " no está entre 10 y 20.");
}
