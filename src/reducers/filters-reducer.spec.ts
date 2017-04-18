import { FiltersActions } from '../actions';
import { filtersReducer, initialState, updateFilterStyle, updateOverlayStyle } from './filters-reducer';
import { FiltersState } from '../interfaces';

describe('filters-reducer', () => {
  let actions: FiltersActions;

  beforeEach(() => {
    actions = new FiltersActions();
  });

  describe('default case', () => {
    it('should return the default state with proper styles and overlay properties', () => {
      let defaultState = filtersReducer(initialState, { type: 'UNDEFINED' });
      let updated = initialState.withMutations((filtersState: FiltersState) => {
        filtersState
          .merge(updateFilterStyle(filtersState))
          .merge(updateOverlayStyle(filtersState))
      });

      expect(defaultState).toEqual(updated);
    });
  });

  describe('CHANGE_CONTRAST action', () => {

  });

  describe('CHANGE_BRIGHTNESS action', () => {

  });

  describe('CHANGE_SATURATE action', () => {

  });

  describe('CHANGE_SEPIA action', () => {

  });

  describe('CHANGE_GRAYSCALE action', () => {

  });

  describe('CHANGE_INVERT action', () => {

  });

  describe('CHANGE_HUEROTATE action', () => {

  });

  describe('CHANGE_BLUR action', () => {

  });

  describe('CHANGE_BLEND action', () => {

  });

  describe('CHANGE_SELECTED_IMAGE action', () => {

  });

  describe('LOADING action', () => {

  });

  describe('CHANGE_PRESET action', () => {

  });

  describe('FETCH_IMAGES_FULFILLED action', () => {

  });

  describe('FETCH_IMAGES_FAILED action', () => {

  });

  describe('RESET_DEFAULTS action', () => {

  });

});