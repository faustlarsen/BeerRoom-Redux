import beerListReducer from '../../reducers/beer-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('beerListReducer', () => {

  let action;
  const beerData = {
    1: {
      name: 'The Beer',
      brand: 'Porter',
      alcoholContent: '5',
      price: '$5',
      keg: 124,
      id: 1 
     },
       2: {
       name: 'Another Beer',
       brand: 'Pilsner',
       alcoholContent: '8',
       price: '$9',
       keg: 124,
       id: 2 
     } 
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(beerListReducer({}, { type: null })).toEqual({});
  });


  test('Should successfully add new beer to masterBeerList', () => {
    const { name, brand, alcoholContent, price, id } = beerData;
    action = {
      type: c.ADD_BEER,
      name: name,
      brand: brand,
      alcoholContent: alcoholContent,
      price: price,
      keg: 124,
      id: id
    };
    
    expect(beerListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        keg: 124,
        id: id
      }
    });
  });

  test('Should successfully delete a beer', () => {
    action = {
      type: c.DELETE_BEER,
      id: 1
    };
    expect(beerListReducer(beerData, action)).toEqual({
      2: {
        name: 'Another Beer',
        brand: 'Pilsner',
        alcoholContent: '8',
        price: '$9',
        keg: 124,
        id: 2 
      }
    });
  });

});