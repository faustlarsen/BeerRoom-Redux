import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, alcoholContent, price, id } = action;
  switch (action.type) {
  case c.ADD_BEER:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        id: id
      }
    });
    case c.DELETE_BEER:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};