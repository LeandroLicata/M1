'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  let pivote = array[0];
  let menor = [];
  let mayor = [];
  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivote) menor.push(array[i])
    else mayor.push(array[i])
  } 
  return quickSort(menor).concat(pivote, quickSort(mayor));
}

function merge(izq, der) {
  let array = [];
  while(izq.length && der.length) {
    if(izq[0] < der[0]) array.push(izq.shift());
    else array.push(der.shift());
  }
  return array.concat(izq, der);
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  let mitad = Math.floor(array.length/2);
  let izq = mergeSort(array.slice(0, mitad));
  let der = mergeSort(array.slice(mitad));
  return merge(izq, der);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
