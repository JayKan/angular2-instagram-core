import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
export function getFiltersState(state$) {
    return state$.select(function (state) { return state.filters; });
}
export function getFilterStyleValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('styles').toJS(); })
        .distinctUntilChanged(function (previous, next) {
        return previous.WebkitFilter === next.WebkitFilter && previous.filter === next.filter;
    });
}
export function getOverlayStyleValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('overlay').toJS(); })
        .distinctUntilChanged(function (previous, next) {
        return previous.background === next.background;
    });
}
export function getContrastFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('contrast'); })
        .distinctUntilChanged();
}
export function getBrightnessFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('brightness'); })
        .distinctUntilChanged();
}
export function getSaturateFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('saturate'); })
        .distinctUntilChanged();
}
export function getSepiaFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('sepia'); })
        .distinctUntilChanged();
}
export function getGrayScaleFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('grayScale'); })
        .distinctUntilChanged();
}
export function getInvertFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filersState) { return filersState.get('invert'); })
        .distinctUntilChanged();
}
export function getHueRotateFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('hueRotate'); })
        .distinctUntilChanged();
}
export function getBlurFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('blur'); })
        .distinctUntilChanged();
}
export function getBlendFilterValue(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('blend'); })
        .distinctUntilChanged();
}
export function getSelectedImage(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('selectedImage'); })
        .distinctUntilChanged();
}
export function getImages(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('images').toJS(); })
        .distinctUntilChanged();
}
export function getError(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('error'); })
        .distinctUntilChanged();
}
export function getLoading(state$) {
    return state$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('loading'); })
        .distinctUntilChanged();
}
//# sourceMappingURL=selectors.js.map