import { Map, List } from 'immutable';
import { FiltersActions } from '../actions/filters-actions';
import { presets } from '../constants';
import { updateFilterStyle, updateOverlayStyle, getOverlayColor } from '../helpers';
var defaultImage = 'https://source.unsplash.com/W_9mOGUwR08/800x600';
export var DEFAULTS = Map({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    grayScale: 0,
    invert: 0,
    hueRotate: 0,
    blur: 0,
    blend: 'none',
    opacity: 50
});
export var initialState = Map({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    grayScale: 0,
    invert: 0,
    hueRotate: 0,
    blur: 0,
    blend: 'none',
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
export function filtersReducer(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
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
            return state.withMutations(function (filtersState) {
                var value = payload.value, type = payload.type;
                filtersState
                    .merge((_a = {}, _a["" + type] = value, _a))
                    .merge(updateFilterStyle(filtersState))
                    .merge(updateOverlayStyle(filtersState));
                var _a;
            });
        case FiltersActions.LOADING:
            return state.withMutations(function (filtersState) {
                var value = payload.value;
                filtersState
                    .merge({ loading: value });
            });
        case FiltersActions.CHANGE_PRESET:
            return state.withMutations(function (filtersState) {
                var figureStyle = payload.figureStyle, overlayStyle = payload.overlayStyle, key = payload.key;
                var preset = presets[key];
                var filter = preset.filter, overlay = preset.overlay;
                filtersState
                    .merge({ 'contrast': filter.get('contrast') || 100 })
                    .merge({ 'brightness': filter.get('brightness') || 100 })
                    .merge({ 'saturate': filter.get('saturate') || 100 })
                    .merge({ 'sepia': filter.get('saturate') || 0 })
                    .merge({ 'grayScale': filter.get('grayscale') || 0 })
                    .merge({ 'invert': filter.get('invert') || 0 })
                    .merge({ 'hueRotate': filter.get('hueRotate') || 0 })
                    .merge({ 'blur': filter.get('blur') || 0 })
                    .merge({ 'blend': filter.get('blend') || 'none' })
                    .merge({ 'opacity': filter.get('opacity') || 50 })
                    .set('styles', figureStyle)
                    .set('overlay', overlayStyle);
            });
        case FiltersActions.FETCH_IMAGES_FULFILLED:
            return state.withMutations(function (filtersState) {
                var data = payload.data;
                filtersState.merge({
                    images: data
                });
            });
        case FiltersActions.FETCH_IMAGES_FAILED:
            return state.withMutations(function (filtersState) {
                var error = payload.error;
                filtersState.merge({
                    error: error
                });
            });
        case FiltersActions.RESET_DEFAULTS:
            return state.withMutations(function (filtersState) {
                filtersState
                    .merge({ 'contrast': 100 })
                    .merge({ 'brightness': 100 })
                    .merge({ 'saturate': 100 })
                    .merge({ 'sepia': 0 })
                    .merge({ 'grayScale': 0 })
                    .merge({ 'invert': 0 })
                    .merge({ 'hueRotate': 0 })
                    .merge({ 'blur': 0 })
                    .merge({ 'blend': 'none' })
                    .merge({ 'opacity': 50 })
                    .merge(updateFilterStyle(DEFAULTS))
                    .merge(updateOverlayStyle(DEFAULTS));
            });
        default:
            return state.withMutations(function (filtersState) {
                filtersState
                    .merge(updateFilterStyle(filtersState))
                    .merge(updateOverlayStyle(filtersState));
            });
    }
}
//# sourceMappingURL=filters-reducer.js.map