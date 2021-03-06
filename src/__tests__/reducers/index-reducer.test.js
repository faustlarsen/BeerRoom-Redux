import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import beerListReducer from '../../reducers/beer-list-reducer';
import editingReducer from '../../reducers/editing-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterBeerList: {},
      formVisibleOnPage: false,
      editing: false,
    });
  });

  test('Check that initial state of editingReducer matches root reducer', () => {
    expect(store.getState().editing).toEqual(editingReducer(undefined, { type: null}));
  });

  test('Check that initial state of beerListReducer matches root reducer', () => {
    expect(store.getState().masterBeerList).toEqual(beerListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_BEER action works for beerListReducer and root reducer', () => {
    const action = {
      type: c.ADD_BEER,
      name: 'The Beer',
      brand: 'Porter',
      alcoholContent: '5',
      price: '$5',
      id: 1 
    }
    store.dispatch(action);
    expect(store.getState().masterBeerList).toEqual(beerListReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that TOGGLE_EDIT action functions for both editingReducer and root reducer', () => {
    let action = {
      type: c.TOGGLE_EDIT
    }
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(undefined, action));
  });

});