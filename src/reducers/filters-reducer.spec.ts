import { FiltersActions } from '../actions';
import { filtersReducer, initialState, DEFAULTS } from './filters-reducer';
import { updateFilterStyle, updateOverlayStyle } from '../helpers';
import { FiltersState } from '../interfaces';
import { presets } from '../constants';

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

  testProperty(FiltersActions.CHANGE_CONTRAST, 'contrast');
  testProperty(FiltersActions.CHANGE_BRIGHTNESS, 'brightness');
  testProperty(FiltersActions.CHANGE_SATURATE, 'saturate');
  testProperty(FiltersActions.CHANGE_SEPIA, 'sepia');
  testProperty(FiltersActions.CHANGE_GRAYSCALE, 'grayScale');
  testProperty(FiltersActions.CHANGE_INVERT, 'invert');
  testProperty(FiltersActions.CHANGE_HUEROTATE, 'hueRotate');
  testProperty(FiltersActions.CHANGE_BLUR, 'blur');
  testProperty(FiltersActions.CHANGE_BLEND, 'blend');
  testProperty(FiltersActions.CHANGE_SELECTED_IMAGE, 'selectedImage');

  describe('LOADING action', () => {
    it('should return FilterState with updated loading value', () => {
      const action = {
        type: FiltersActions.LOADING,
        payload: { value: true }
      };
      const state = filtersReducer(initialState, action);
      const updated = initialState.withMutations((filtersState: FiltersState) => {
        const { value } = action.payload;
        filtersState
          .merge({ loading: value });
      });
      expect(state).toEqual(updated);
    });
  });

  describe('CHANGE_PRESET action', () => {
    it('should return FilterState with a preset applied', () => {
      const presetName = 'aden';
      const action = {
        type: FiltersActions.CHANGE_PRESET,
        payload: {
          figureStyle: presets[presetName].filter,
          overlayStyle: presets[presetName].overlay,
          key: presetName
        }
      };
      const state = filtersReducer(initialState, action);
      const update = initialState.withMutations((filtersState: FiltersState) => {
        const { figureStyle, overlayStyle, key } = action.payload;
        const preset = presets[key];
        const { filter, overlay } = preset;
        filtersState
          .merge({ 'contrast'   : filter.get('contrast')    || 100    })
          .merge({ 'brightness' : filter.get('brightness')  || 100    })
          .merge({ 'saturate'   : filter.get('saturate')    || 100    })
          .merge({ 'sepia'      : filter.get('saturate')    || 0      })
          .merge({ 'grayScale'  : filter.get('grayscale')   || 0      })
          .merge({ 'invert'     : filter.get('invert')      || 0      })
          .merge({ 'hueRotate'  : filter.get('hueRotate')   || 0      })
          .merge({ 'blur'       : filter.get('blur')        || 0      })
          .merge({ 'blend'      : filter.get('blend')       || 'none' })
          .merge({ 'opacity'    : filter.get('opacity')     || 50     })
          .set('styles', figureStyle)
          .set('overlay', overlayStyle);
      });
      expect(state).toEqual(update);
    });
  });

  describe('FETCH_IMAGES_FULFILLED action', () => {
    it('should return FilterState with updated images value', () => {
      const action = {
        type: FiltersActions.FETCH_IMAGES_FULFILLED,
        payload: {
          data: [{
            id: 1,
            thumb: 'https://url.com/image-1/'
          }, {
            id: 2,
            thumb: 'https://url.com/image-2/'
          }]
        }
      };

      const state = filtersReducer(initialState, action);
      const update = initialState.withMutations(filtersState => {
        filtersState.merge({
          images: action.payload.data
        });
      });

      expect(state).toEqual(update);
    });
  });

  describe('FETCH_IMAGES_FAILED action', () => {
    it('should return FilterState with updated error value', () => {
      const action = {
        type: FiltersActions.FETCH_IMAGES_FAILED,
        payload: {
          error: new Error('Images fetch error')
        }
      };

      const state = filtersReducer(initialState, action);
      const update = state.withMutations(filtersState => {
        filtersState.merge({
          error: action.payload.error
        });
      });

      expect(state).toEqual(update);
    });
  });

  describe('RESET_TO_DEFAULT action', () => {
    it('should return FilterState with default values', () => {
      const action = {
        type: FiltersActions.RESET_DEFAULTS
      };

      const state = filtersReducer(initialState, action);
      const update = initialState.withMutations((filtersState: FiltersState) => {
        filtersState
          .merge({ 'contrast'   : 100   })
          .merge({ 'brightness' : 100   })
          .merge({ 'saturate'   : 100   })
          .merge({ 'sepia'      : 0     })
          .merge({ 'grayScale'  : 0     })
          .merge({ 'invert'     : 0     })
          .merge({ 'hueRotate'  : 0     })
          .merge({ 'blur'       : 0     })
          .merge({ 'blend'      : 'none'})
          .merge({ 'opacity'    : 50    })
          .merge(updateFilterStyle(DEFAULTS))
          .merge(updateOverlayStyle(DEFAULTS));
      });

      expect(state).toEqual(update);
    });
  });

  function testProperty(actionType: string, type: string): void {
    describe(`${actionType} action`, () => {
      it(`should return FilterState with updated ${type} value`, () => {
        const value = 5;
        const action = {
          type: actionType,
          payload: { type, value }
        };
        const state = filtersReducer(initialState, action);
        const updated = initialState.withMutations((filtersState: FiltersState) => {
          const { value, type } = action.payload;
          filtersState
            .merge({ [`${type}`]: value })
            .merge(updateFilterStyle(filtersState))
            .merge(updateOverlayStyle(filtersState));
        });
        expect(state).toEqual(updated);
      });
    });
  }

});
