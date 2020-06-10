import $ from 'jquery';
import api from './api';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  api
    .getItems()
    .then((res) => res.json())
    .then((res) => console.log(res));

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
