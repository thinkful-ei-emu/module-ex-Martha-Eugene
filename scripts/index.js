'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars

function main() {
  shoppingList.bindEventListeners();

  const itemNames = [ '', 'apples', 'pears' ];
  itemNames.forEach(name => {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  });
  shoppingList.render();
}

$(main);
