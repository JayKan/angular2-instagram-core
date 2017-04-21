import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { initialState } from './filters-reducer';
import {
  getFiltersState,
  getFilterStyleValue,
  getOverlayStyleValue,
  getBrightnessFilterValue,
  getSaturateFilterValue,
  getSepiaFilterValue,
  getGrayScaleFilterValue,
  getInvertFilterValue,
  getHueRotateFilterValue,
  getBlurFilterValue,
  getBlendFilterValue,
  getSelectedImage,
  getImages,
  getError,
  getLoading
} from './selectors';

import { AppState, FiltersState } from '../interfaces';

describe('selectors', () => {
  let appState: AppState;
  let appState$: Observable<AppState>;

  beforeEach(() => {
      appState = { filters: initialState };
      appState$ = Observable.of(appState);
  });

  describe('getFiltersState()', () => {
    it('should return AppState filters', () => {
      getFiltersState(appState$).subscribe(res => {
        expect(res).toEqual(appState.filters);
      });
    });
  });

  describe('getFilterStyleValue()', () => {
    it('should return AppState filters styles property', () => {
      getFilterStyleValue(appState$).subscribe(res => {
        expect(res).toEqual(appState.filters.get('styles').toJS());
      });
    });
  });

  describe('getOverlayStyleValue()', () => {
    it('should return AppState filters overlay property', () => {
      getOverlayStyleValue(appState$).subscribe(res => {
        expect(res).toEqual(appState.filters.get('overlay').toJS());
      });
    });
  });

  // TODO: this does not work at the moment
  // http://stackoverflow.com/questions/43514984/how-to-handle-a-subscription-observable-inside-a-jasmine-test
  // checkFilterStateProp('brightness', getBrightnessFilterValue);

  // function checkFilterStateProp(propName: string, func: any, toJs: boolean = false): any {
  //   describe('functionName()', () => {
  //     let val: any;
  //     let count = 0;

  //     const value = appState.filters.get(propName);
  //     func(appState$).subscribe(res => {
  //       count++;
  //       val = res;
  //     });
  //     it('should return some property', () => {
  //       expect(count).toBe(1);
  //       expect(val).toEqual(toJs ? value.toJS() : value);
  //     });
  //   });
  // }

});
