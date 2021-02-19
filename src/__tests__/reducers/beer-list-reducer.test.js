import beerListReducer from '../../reducers/beer-list-reducer';

describe('beerListReducer', () => {

  let action;
  const beerData = {
    name: 'The Beer',
    brand: 'Porter',
    alcoholContent: '5',
    price: '$5',
    id: 1 
  };

  test('Should successfully add new beer to masterBeerList', () => {
    const { name, brand, alcoholContent, price, id } = beerData;
    action = {
      type: 'ADD_BEER',
      name: name,
      brand: brand,
      alcoholContent: alcoholContent,
      price: price,
      id: id
    };

       expect(beerListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        id: id
      }
    });
  });


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(beerListReducer({}, { type: null })).toEqual({});
  });

});