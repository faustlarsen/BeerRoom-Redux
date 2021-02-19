import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('beer room actions', () => {
  it('addBeer should create ADD_BEER action', () => {
    expect(actions.addBeer({
      name: 'The Beer',
      brand: 'Porter',
      alcoholContent: '5',
      price: '$5',
      id: 1 
    })).toEqual({
      type: c.ADD_BEER,
      name: 'The Beer',
      brand: 'Porter',
      alcoholContent: '5',
      price: '$5',
      id: 1 
  });
});

  it('deleteBeer should create DELETE_BEER action', () => {
    expect(actions.deleteBeer(1)).toEqual({
      type: c.DELETE_BEER,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM,
    });
  });

});

