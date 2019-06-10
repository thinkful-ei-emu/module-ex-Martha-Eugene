'use strict';
/* global store, cuid */

// eslint-disable-next-line no-unused-vars

const Item = (function (){
  const validateName =function(name){
    if (name.length === 0 ){
      throw TypeError('Name does not exist');
    }
  }
  const create = function(name){
    return {
      id: cuid(),
      name: name,
      checked: false,
    }
  }
  
  
  return {
    validateName,
    create,
  };
}());

