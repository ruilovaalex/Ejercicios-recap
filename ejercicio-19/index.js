'use strict';

function numeros(a, b, c) {
    return a + b + c;
}
let a = Number(prompt("Ingrese su primer número"));
let b = Number(prompt("Ingrese su segundo número"));
let c = Number(prompt("Ingrese su tercer número"));
let result = numeros(a, b, c)
alert("Su resultado es " + result)