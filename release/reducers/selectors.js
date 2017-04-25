import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
export function getFiltersState(store$) {
    return store$.select(function (state) { return state.filters; })
        .distinctUntilChanged();
}
export function getFilterStyleValue(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('styles').toJS(); })
        .distinctUntilChanged(function (previous, next) {
        return previous.WebkitFilter === next.WebkitFilter && previous.filter === next.filter;
    });
}
export function getOverlayStyleValue(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('overlay').toJS(); })
        .distinctUntilChanged(function (previous, next) {
        return previous.background === next.background;
    });
}
export function getContrastFilterValue(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('contrast'); })
        .distinctUntilChanged();
}
export function getBrightnessFilterValue(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('brightness'); })
        .distinctUntilChanged();
}
export function getSaturateFilterValue(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('saturate'); })
        .distinctUntilChanged();
}
export function getSepiaFilterValue(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('sepia'); })
        .distinctUntilChanged();
}
export function getGrayScaleFilterValue(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('grayScale'); })
        .distinctUntilChanged();
}
export function getInvertFilterValue(store$) {
    return store$.let(getFiltersState)
        .map(function (filersState) { return filersState.get('invert'); })
        .distinctUntilChanged();
}
export function getHueRotateFilterValue(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('hueRotate'); })
        .distinctUntilChanged();
}
export function getBlurFilterValue(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('blur'); })
        .distinctUntilChanged();
}
export function getBlendFilterValue(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('blend'); })
        .distinctUntilChanged();
}
export function getSelectedImage(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('selectedImage'); })
        .distinctUntilChanged();
}
export function getImages(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('images').toJS(); })
        .distinctUntilChanged();
}
export function getError(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('error'); })
        .distinctUntilChanged();
}
export function getLoading(store$) {
    return store$.let(getFiltersState)
        .map(function (filtersState) { return filtersState.get('loading'); })
        .distinctUntilChanged();
}
//# sourceMappingURL=selectors.js.map