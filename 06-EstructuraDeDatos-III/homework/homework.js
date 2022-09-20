"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.cont = 1;
}

BinarySearchTree.prototype.insert = function(value) {
  if(value<this.value) {
    if(!this.left) {
      this.left = new BinarySearchTree(value);
    } else this.left.insert(value);
  } else if(!this.right) {
    this.right = new BinarySearchTree(value);
  } else this.right.insert(value);
  this.cont++;
}
 
BinarySearchTree.prototype.contains = function(value) {
  if(value===this.value) return true;
  if(value<this.value) {
    if(!this.left) return false;
    else return this.left.contains(value);
  } else if(!this.right) return false;
  else return this.right.contains(value);
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
  if(order==='in-order' || !order) {
    if(this.left) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if(this.right) this.right.depthFirstForEach(cb, order);
  }
  if(order==='pre-order') {
    cb(this.value);
    if(this.left) this.left.depthFirstForEach(cb, order);
    if(this.right) this.right.depthFirstForEach(cb, order);
  }
  if(order==='post-order') {
    if(this.left) this.left.depthFirstForEach(cb, order);
    if(this.right) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array=[]) {
  cb(this.value);
  if(this.left) array.push(this.left);
  if(this.right) array.push(this.right);
  let nextNode = array.shift();
  if(nextNode) nextNode.breadthFirstForEach(cb, array);
}

BinarySearchTree.prototype.size = function() {
  return this.cont;
  // if(!this.left && !this.right) return 1;
  // if(!this.left) {
  //   return 1 + this.right.size();
  // }
  // if(!this.right) {
  //   return 1 + this.left.size();
  // }
  // return 1 + this.left.size() + this.right.size();
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
