import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { filtersReducer, initialState } from '../reducers';
import { FiltersActions } from '../actions';
import { FiltersService } from './filters-service';
import { AppState } from '../interfaces';

describe('filters-service', () => {
  let actions: FiltersActions;
  let service: FiltersService;
  let store: Store<AppState>;

  beforeEach(() => {
    let injector = TestBed.configureTestingModule({
      imports: [
        HttpModule,
        StoreModule.provideStore({ filters: filtersReducer })
      ],
      providers: [
        FiltersActions,
        FiltersService,
      ]
    });

    actions = injector.get(FiltersActions);
    service = injector.get(FiltersService);
    store = injector.get(Store);
  });

  // Test all observables properties from `filters-service`
  describe('<observables>', () => {
    describe('contrast$ observable<number>', () => {
      it('should stream the current contrast from store', () => {
        let count = 0;
        let initialContrastValue = initialState.get('contrast');
        let contrastValue = null;

        service.contrast$.subscribe(value => {
          count++;
          contrastValue = value;
        });

       // auto-emitting initial value
        expect(count).toBe(1);
        expect(contrastValue).toBe(initialContrastValue);

        // contrast value changes 1st time
        store.dispatch(actions.changeContrast(50));
        expect(count).toBe(2);
        expect(contrastValue).toBe(50);

        // same contrast value: should not emit
        store.dispatch(actions.changeContrast(50));
        expect(count).toBe(2);

        // contrast value changes 2nd time
        store.dispatch(actions.changeContrast(60));
        expect(count).toBe(3);
        expect(contrastValue).toBe(60);

        // dispatching unrelated action: should not emit any new value
        store.dispatch({ type: 'UNDEFINED' });
        expect(count).toBe(3);
      });
    });

    describe('brightness$ observable', () => {

    });

    describe('saturate$ observable', () => {

    });

    describe('sepia$ observable', () => {

    });

    describe('grayscale$ observable', () => {

    });

    describe('invert$ observable', () => {

    });

    describe('hueRotate$ observable', () => {

    });

    describe('blur$ observable', () => {

    });

    describe('blend$ observable', () => {

    });

    describe('overlayStyle$ observable', () => {

    });

    describe('filterStyle$ observable', () => {

    });

    describe('selectedImage$ observable', () => {

    });

    describe('images$ observable', () => {

    });

    describe('error$ observable', () => {

    });

    describe('loading$ observable', () => {

    });
  });

  // Test all actions methods from `filters-service`
  describe('<actions>', () => {
    describe('changeContrast()', () => {
      it('should call store.dispatch() with CHANGE_CONTRAST action', () => {
        let value = 50;

        spyOn(store, 'dispatch');
        service.changeContrast(value);

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changeContrast(value));

        value = 90;
        service.changeContrast(value);
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changeContrast(value))
      });

      it('should NOT dispatch action if contrast value is undefined or invalid', () => {
        spyOn(store, 'dispatch');

        service.changeContrast(undefined);
        expect(store.dispatch).not.toHaveBeenCalled();

        service.changeContrast(null);
        expect(store.dispatch).not.toHaveBeenCalled();
      });
    });

    describe('changeBrightness()', () => {
      it('should call store.dispatch() with CHANGE_BRIGHTNESS action', () => {
        let value = 50;

        spyOn(store, 'dispatch');
        service.changeBrightness(value);

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changeBrightness(value));

        value = 98;
        service.changeBrightness(value);
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changeBrightness(value));
      });

      it('should NOT dispatch action if brightness value is undefined or invalid', () => {
        spyOn(store, 'dispatch');

        service.changeBrightness(undefined);
        expect(store.dispatch).not.toHaveBeenCalled();

        service.changeBrightness(null);
        expect(store.dispatch).not.toHaveBeenCalled();
      });
    });

    describe('changeSaturate()', () => {

    });

    describe('changeSepia()', () => {

    });

    describe('changeGrayScale()', () => {

    });

    describe('changeInvert()', () => {

    });

    describe('changeHueRotate()', () => {

    });

    describe('changeBlur()', () => {

    });

    describe('changeBlend()', () => {

    });

    describe('changePreset()', () => {

    });

    describe('loadAllImages()', () => {

    });

    describe('resetToDefaults()', () => {

    });

    describe('changeLoading()', () => {

    });

    describe('fetchImages()', () => {

    });

  });
});
