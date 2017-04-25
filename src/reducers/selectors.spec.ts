import 'rxjs/add/observable/of';
import 'rxjs/add/operator/let';
import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { initialState } from './filters-reducer';
import { FiltersActions } from '../actions';
import { filtersReducer } from '../reducers';
import { updateFilterStyle } from '../helpers';
import { AppState, FiltersState } from '../interfaces';
import {
  getFiltersState,
  getFilterStyleValue,
  getOverlayStyleValue,
  getContrastFilterValue,
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

describe('selectors', () => {
  let appState: AppState;
  let appState$: Observable<AppState>;
  let actions: FiltersActions;
  let store$: Store<AppState>;

  beforeEach(() => {
    let injector = TestBed.configureTestingModule({
      imports: [
        StoreModule.provideStore({ filters: filtersReducer })
      ],
      providers: [FiltersActions]
    });

    appState = { filters: initialState };
    appState$ = Observable.of(appState);
    actions = injector.get(FiltersActions);
    store$ = injector.get(Store);
  });


  describe('getFilterStyleValue()', () => {
    it('should return observable that emits FilterStyle', () => {
      let count = 0;
      let filterStyles = null;
      let { styles } = updateFilterStyle(initialState);


      getFilterStyleValue(store$).subscribe(value => {
        count++;
        filterStyles = value;
      });

      // auto-emitting initial value
      expect(count).toBe(1);
      expect(filterStyles).toEqual(styles);

      // dispatching unrelated action should emit
      store$.dispatch({ type: 'UNDEFINED' });
      expect(count).toBe(1);
    });
  });

  describe('getOverlayStyleValue()', () => {
    it('should return AppState filters overlay property', () => {
      getOverlayStyleValue(store$).subscribe(res => {
        expect(res).toEqual(appState.filters.get('overlay').toJS());
      });
    });
  });

  describe('getContrastFilterValue()', () => {
    it('should return observable that emits contrast value number', () => {
      let count = 0;
      let contrast = null;
      let initialContrastValue = appState.filters.get('contrast');

      getContrastFilterValue(store$).subscribe(value => {
        count++;
        contrast = value;
      });

      // auto-emitting initial value
      expect(count).toBe(1);
      expect(contrast).toBe(initialContrastValue);

      // should not emit since contrastValue === initial contrast value
      store$.dispatch(actions.changeContrast(100));
      expect(count).toBe(1);

      // change contrast value should emit
      store$.dispatch(actions.changeContrast(90));
      expect(count).toBe(2);
      expect(contrast).toBe(90);

      // dispatching unrelated action should emit
      store$.dispatch({ type: 'UNDEFINED' });
      expect(count).toBe(2);
    });
  });

  describe('getBrightnessFilterValue()', () => {
    it('should return observable that emits brightness value number', () => {
      let count = 0;
      let brightness = null;
      let initialBrightnessValue = appState.filters.get('brightness');

      getBrightnessFilterValue(store$).subscribe(value => {
        count++;
        brightness = value;
      });

      // auto-emitting initial value
      expect(count).toBe(1);
      expect(brightness).toBe(initialBrightnessValue);

      // should not emit since brightness === initial brightness value
      store$.dispatch(actions.changeBrightness(100));
      expect(count).toBe(1);

      // change brightness value should emit
      store$.dispatch(actions.changeBrightness(90));
      expect(count).toBe(2);

      // should not emit when trigger contrast change
      store$.dispatch(actions.changeContrast(90));
      expect(count).toBe(2);

      // dispatching unrelated action should emit
      store$.dispatch({ type: 'UNDEFINED' });
      expect(count).toBe(2);
    });
  });

  describe('getSaturateFilterValue()', () => {
    it('should return observable that emits saturate value number', () => {
      let count = 0;
      let saturate = null;
      let initialSaturateValue = appState.filters.get('saturate');

      getSaturateFilterValue(store$).subscribe(value => {
        count++;
        saturate = value;
      });

      // auto-emitting initial value
      expect(count).toBe(1);
      expect(saturate).toBe(initialSaturateValue);

      // should not emit since saturate === initial saturate value
      store$.dispatch(actions.changeSaturate(100));
      expect(count).toBe(1);

      // change saturate value should emit
      store$.dispatch(actions.changeSaturate(90));
      expect(count).toBe(2);

      // should not emit when trigger contrast change
      store$.dispatch(actions.changeContrast(90));
      expect(count).toBe(2);

      // should not emit when trigger brightness change
      store$.dispatch(actions.changeBrightness(90));
      expect(count).toBe(2);

      // dispatching unrelated action should emit
      store$.dispatch({ type: 'UNDEFINED' });
      expect(count).toBe(2);
    });
  });

  describe('getSepiaFilterValue()', () => {
    it('should return observable that emits sepia value number', () => {
      let count = 0;
      let sepia = null;
      let initialSepiaValue = appState.filters.get('sepia');

      getSepiaFilterValue(store$).subscribe(value => {
        count++;
        sepia = value;
      });

      // auto-emitting initial value
      expect(count).toBe(1);
      expect(sepia).toBe(initialSepiaValue);

      // should not emit since sepia === initial sepia value
      store$.dispatch(actions.changeSepia(0));
      expect(count).toBe(1);

      // change sepia value should emit
      store$.dispatch(actions.changeSepia(90));
      expect(count).toBe(2);

      // should not emit when trigger contrast change
      store$.dispatch(actions.changeContrast(90));
      expect(count).toBe(2);

      // should not emit when trigger brightness change
      store$.dispatch(actions.changeBrightness(90));
      expect(count).toBe(2);

      // dispatching unrelated action should emit
      store$.dispatch({ type: 'UNDEFINED' });
      expect(count).toBe(2);
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
