import editReducer from '../../reducers/edit-reducer';
import * as c from './../../actions/ActionTypes';

describe('editReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(editReducer(false, { type: null})).toEqual(false);
  });

  test('Should toggle form visibility state to true', () => {
    expect(editReducer(false, {type: c.TOGGLE_EDIT})).toEqual(true);
  });
});