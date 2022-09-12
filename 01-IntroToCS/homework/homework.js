'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let arrayBinario=num.toString().split('').reverse();
  let arrayTransformado=[];
  let decimal=0;
  for(let i=0; i<arrayBinario.length; i++) {
    arrayTransformado.push(2**i*arrayBinario[i])
  }
  for(let j=0; j<arrayTransformado.length; j++) {
    decimal+=arrayTransformado[j];
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let arrayBinario=[];
  while(num!==0) {
    arrayBinario.unshift(num%2);
    num/=2;
    num=Math.floor(num);
  }
  let binario=arrayBinario.join('');
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}