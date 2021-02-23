import * as c from './../actions/ActionTypes';

export const deleteBeer = id => ({
  type: c.DELETE_BEER,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const editingToggle = () => ({
  type: c.TOGGLE_EDIT
});


export const addBeer = (beer) => {
  const { name, brand, alcoholContent, price, id } = beer;
  return {
    type: c.ADD_BEER,
    name: name,
    brand: brand,
    alcoholContent: alcoholContent,
    price: price,
    id: id
  }
}

export const buyBeer = (beerId) => {
  return {
    type: c.BUY_BEER,
    id: beerId
  }
}