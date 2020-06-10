const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ei-student';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  const newItem = JSON.stringify({ name });

  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newItem,
  });
};

const updateItem = function (id, updateData) {
  const newData = JSON.stringify(updateData);
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newData,
  });
};

const deleteItem = function (id) {
  return fetch(BASE_URL + '/items/' + id, {
    method: 'DELETE',
  });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem,
};
