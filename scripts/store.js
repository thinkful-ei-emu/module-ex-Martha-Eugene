'use strict';
/* global store, cuid */

//eslint-disable-next-line no-unused-vars

const store = (function() {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id){
    const foundItem = this.items.find(item => item.id === id);
    return foundItem;
  };

  const addItem = function(name){
    try{
      Item.validateName(name);
      const newItem = Item.create(name);
      items.push(newItem);
    }
    catch(error){
      console.log(`Cannot add item: ${error.message}`);
    }
  };

  const findAndToggleChecked = function(id){
    console.log(this);
    let foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
  };  

  const findAndUpdateName = function(id, newName){
    try{
      Item.validateName(newName);
      findById(id).name = newName;
    }
    catch(error){
      console.log(`Cannot update name: ${error.message}`);
    }
  };

  const findAndDelete = function(id){
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(search){
    this.searchTerm = search;
  };



  return {
    items,
    hideCheckedItems,
    searchTerm,
    addItem,
    findById,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,


  };
}());