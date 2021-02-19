import beerListReducer from '../../reducers/beer-list-reducer';

describe('beerListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(beerListReducer({}, { type: null })).toEqual({});
  });
});