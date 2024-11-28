"use strict";
const calcularIVA = (precio) => {
 const iva = precio * 0.12; 
 const precioTotal = precio + iva; 
 alert("Precio con IVA: " + precioTotal);
};
calcularIVA(120); 
