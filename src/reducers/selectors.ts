import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, FiltersState, FilterStyle, OverlayStyle } from '../interfaces';

export function getFiltersState(store$: Store<AppState>): Observable<FiltersState> {
  return store$.select((state: AppState) => state.filters)
    .distinctUntilChanged();
}

export function getFilterStyleValue(store$: Store<AppState>): Observable<FilterStyle> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('styles').toJS())
    .distinctUntilChanged((previous: FilterStyle, next: FilterStyle) => {
      return previous.WebkitFilter === next.WebkitFilter && previous.filter === next.filter;
    });
}

export function getOverlayStyleValue(store$: Store<AppState>): Observable<OverlayStyle> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('overlay').toJS())
    .distinctUntilChanged((previous: OverlayStyle, next: OverlayStyle) => {
      return previous.background === next.background;
    });
}

export function getContrastFilterValue(store$: Store<AppState>): Observable<number> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('contrast'))
    .distinctUntilChanged();
}

export function getBrightnessFilterValue(store$: Store<AppState>): Observable<number> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('brightness'))
    .distinctUntilChanged();
}

export function getSaturateFilterValue(store$: Store<AppState>): Observable<number> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('saturate'))
    .distinctUntilChanged();
}

export function getSepiaFilterValue(store$: Store<AppState>): Observable<number> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('sepia'))
    .distinctUntilChanged();
}

export function getGrayScaleFilterValue(store$: Store<AppState>): Observable<number> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('grayScale'))
    .distinctUntilChanged();
}

export function getInvertFilterValue(store$: Store<AppState>): Observable<number> {
  return store$.let(getFiltersState)
    .map((filersState: FiltersState) => filersState.get('invert'))
    .distinctUntilChanged();
}

export function getHueRotateFilterValue(store$: Store<AppState>): Observable<number> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('hueRotate'))
    .distinctUntilChanged();
}

export function getBlurFilterValue(store$: Store<AppState>): Observable<number> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('blur'))
    .distinctUntilChanged();
}

export function getBlendFilterValue(store$: Store<AppState>): Observable<string> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('blend'))
    .distinctUntilChanged();
}

export function getSelectedImage(store$: Store<AppState>): Observable<string> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('selectedImage'))
    .distinctUntilChanged();
}

export function getImages(store$: Store<AppState>): Observable<any> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('images').toJS())
    .distinctUntilChanged();
}

export function getError(store$: Store<AppState>): Observable<string> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('error'))
    .distinctUntilChanged();
}

export function getLoading(store$: Store<AppState>): Observable<boolean> {
  return store$.let(getFiltersState)
    .map((filtersState: FiltersState) => filtersState.get('loading'))
    .distinctUntilChanged();
}
