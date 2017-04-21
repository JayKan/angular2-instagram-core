import { Action } from '@ngrx/store';
import { Map, List } from 'immutable';

import { FiltersActions } from '../actions/filters-actions';
import { FiltersState, FilterStyle, OverlayStyle } from '../interfaces';
import { presets } from '../constants';
import {
  getFilterStyles,
  updateFilterStyle,
  updateOverlayStyle,
  getOverlayColor
} from '../helpers';

const defaultImage: string = 'https://source.unsplash.com/W_9mOGUwR08/800x600';
export const DEFAULTS = Map({
  contrast:   100,
  brightness: 100,
  saturate:   100,
  sepia:      0,
  grayScale:  0,
  invert:     0,
  hueRotate:  0,
  blur:       0,
  blend:   'none',
  opacity: 50
});

export const initialState: FiltersState = Map({
  contrast:   100,
  brightness: 100,
  saturate:   100,
  sepia:      0,
  grayScale:  0,
  invert:     0,
  hueRotate:  0,
  blur:       0,
  blend:   'none',
  opacity: 50,
  styles: Map({
    position: 'relative',
    WebkitFilter: null,
    filter: null
  }),
  overlay: Map({
    content: ' ',
    display: 'block',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    position: 'absolute',
    mixBlendMode: 'normal',
    opacity: 0.5,
    background: getOverlayColor('none')
  }),
  selectedImage: defaultImage,
  images: List(),
  error: null,
  loading: false
});

export function filtersReducer(state: FiltersState = initialState, { type, payload }: Action): FiltersState {
  switch (type) {
    case FiltersActions.CHANGE_CONTRAST:
    case FiltersActions.CHANGE_BRIGHTNESS:
    case FiltersActions.CHANGE_SATURATE:
    case FiltersActions.CHANGE_SEPIA:
    case FiltersActions.CHANGE_GRAYSCALE:
    case FiltersActions.CHANGE_INVERT:
    case FiltersActions.CHANGE_HUEROTATE:
    case FiltersActions.CHANGE_BLUR:
    case FiltersActions.CHANGE_BLEND:
    case FiltersActions.CHANGE_SELECTED_IMAGE:
      return state.withMutations(filtersState => {
        const { value, type } = payload;
        filtersState
          .merge({ [`${type}`]: value })
          .merge(updateFilterStyle(filtersState))
          .merge(updateOverlayStyle(filtersState));
      });

    case FiltersActions.LOADING:
      return state.withMutations(filtersState => {
        const { value } = payload;
        filtersState
          .merge({ loading: value })
      });

    case FiltersActions.CHANGE_PRESET:
      return state.withMutations(filtersState => {
        const { figureStyle, overlayStyle, key } = payload;
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

    case FiltersActions.FETCH_IMAGES_FULFILLED:
      return state.withMutations(filtersState => {
        const { data } = payload;
        filtersState.merge({
          images: data
        });
      });

    case FiltersActions.FETCH_IMAGES_FAILED:
      return state.withMutations(filtersState => {
        const { error } = payload;
        filtersState.merge({
          error: error
        });
      });

    case FiltersActions.RESET_DEFAULTS:
      return state.withMutations(filtersState => {
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

    default:
      return state.withMutations(filtersState => {
        filtersState
          .merge(updateFilterStyle(filtersState))
          .merge(updateOverlayStyle(filtersState));
      });
  }
}
