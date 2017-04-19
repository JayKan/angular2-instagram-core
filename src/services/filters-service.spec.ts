import { TestBed } from '@angular/core/testing';
import { Store, StoreModule, Action } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Map } from 'immutable';
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
    let count: number;
    let value: any;

    beforeEach(() => {
      count = 0;
      value = null;
    });

    describe('contrast$ observable<number>', () => {
      it(`should stream the current contrast from store`, () => {
        numberSharedTest('contrast', service.contrast$, actions.changeContrast);
      })
    });

    describe('brightness$ observable', () => {
      it(`should stream the current brightness from store`, () => {
        numberSharedTest('brightness', service.brightness$, actions.changeBrightness);
      });
    });

    describe('saturate$ observable', () => {
      it(`should stream the current saturate from store`, () => {
        numberSharedTest('saturate', service.saturate$, actions.changeSaturate);
      });
    });

    describe('sepia$ observable', () => {
      it(`should stream the current sepia from store`, () => {
        numberSharedTest('sepia', service.sepia$, actions.changeSepia);
      });
    });

    describe('grayscale$ observable', () => {
      it(`should stream the current grayscale from store`, () => {
        numberSharedTest('grayScale', service.grayscale$, actions.changeGrayScale);
      });
    });

    describe('invert$ observable', () => {
      it(`should stream the current invert from store`, () => {
        numberSharedTest('invert', service.invert$, actions.changeInvert);
      });
    });

    describe('hueRotate$ observable', () => {
      it(`should stream the current hueRotate from store`, () => {
        numberSharedTest('hueRotate', service.hueRotate$, actions.changeHueRotate);
      });
    });

    describe('blur$ observable', () => {
      it(`should stream the current blur from store`, () => {
        numberSharedTest('blur', service.blur$, actions.changeBlur);
      });
    });

    describe('blend$ observable', () => {
      it('should stream the current blend from store', () => {
        const initialvalue = initialState.get('blend');

        service.blend$.subscribe(res => {
          count++;
          value = res;
        });

        expect(count).toBe(1);
        expect(value).toBe(initialvalue);

        store.dispatch(actions.changeBlend('blend'));
        expect(count).toBe(2);
        expect(value).toBe('blend');

        store.dispatch(actions.changeBlend('blend'));
        expect(count).toBe(2);

        store.dispatch(actions.changeBlend('overlay'));
        expect(count).toBe(3);
        expect(value).toBe('overlay');

        store.dispatch({ type: 'UNDEFINED' });
        expect(count).toBe(3);
      });
    });

    describe('overlayStyle$ observable', () => {
      it('should stream the current overlayStyle from store', () => {
        const initialValue = initialState.get('overlay').toJS();

        service.overlayStyle$.subscribe(res => {
          count++;
          value = res;
        });

        expect(count).toBe(1);
        expect(value).toEqual(initialValue);

        // HELP: is this correct or should I create a mock action that
        // changes only the overlayStyle prop?
        let newValue = {
          figureStyle: initialState.get('styles'),
          overlayStyle: Map(Object.assign({}, initialState.get('overlay').toJS(), { background: 'solid_background' })),
          key: 'aden'
        }

        // test after changing the overlayStyle part of the payload
        store.dispatch(actions.changePreset(newValue));
        expect(count).toBe(2);
        expect(value).toEqual(newValue.overlayStyle.toJS());

        // not changing overlayStyle.background shouldn't emit any new value
        newValue.overlayStyle.set('display', 'inline');
        store.dispatch(actions.changePreset(newValue));
        expect(count).toBe(2);

        // HELP: when the default action is triggered the overlayStyle gets updated
        // should we test this behavior?
        // store.dispatch({ type: 'UNDEFINED' });
        // expect(count).toBe(2);
      });
    });

    describe('filterStyle$ observable', () => {
      // TODO(damnko): complete this once overlayStyle test will be confirmed as appropriate
    });

    describe('selectedImage$ observable', () => {
      it('should stream the current selectedImage$ from store', () => {
        const initialValue = initialState.get('selectedImage');

        service.selectedImage$.subscribe(res => {
          count++;
          value = res;
        });

        expect(count).toBe(1);
        expect(value).toBe(initialValue);

        store.dispatch(actions.changeSelectImage('https://someurl.com/newimage/'));
        expect(count).toBe(2);
        expect(value).toBe('https://someurl.com/newimage/');

        store.dispatch(actions.changeSelectImage('https://someurl.com/newimage/'));
        expect(count).toBe(2);

        store.dispatch(actions.changeSelectImage('https://someurl.com/newimage-1/'));
        expect(count).toBe(3);
        expect(value).toBe('https://someurl.com/newimage-1/');

        store.dispatch({ type: 'UNDEFINED' });
        expect(count).toBe(3);
      });
    });

    describe('images$ observable', () => {
      it('should stream the current images$ from store', () => {
        const initialValue = initialState.get('images').toJS();

        service.images$.subscribe(res => {
          count++;
          value = res;
        });

        expect(count).toBe(1);
        expect(value).toEqual(initialValue);

        const images = [{
          id: 1,
          thumb: 'https://url/image-1/'
        }, {
          id: 2,
          thumb: 'https://url/image-2/'
        }];

        store.dispatch(actions.fetchImagesFulfilled(images));
        expect(count).toBe(2);
        expect(value).toEqual(images);

        // HELP: triggering the default event returns the same array of images
        // and triggers service.images$ even if selectors.getImages uses distinctUntilChanged()
        // store.dispatch({ type: 'UNDEFINED' });
        // expect(count).toBe(2);
      });
    });

    describe('error$ observable', () => {
      it('should stream the current error$ from store', () => {
        const initialValue = initialState.get('error');

        service.error$.subscribe(res => {
          count++;
          value = res;
        });

        expect(count).toBe(1);
        expect(value).toBe(initialValue);

        store.dispatch(actions.fetchImagesFailed('error'));
        expect(count).toBe(2);
        expect(value).toBe('error');

        store.dispatch({ type: 'UNDEFINED' });
        expect(count).toBe(2);
      });
    });

    describe('loading$ observable', () => {
      it('should stream the current loading$ from store', () => {
        const initialValue = initialState.get('loading');

        service.loading$.subscribe(res => {
          count++;
          value = res;
        });

        expect(count).toBe(1);
        expect(value).toBe(initialValue);

        store.dispatch(actions.changeLoading(true));
        expect(count).toBe(2);
        expect(value).toBe(true);

        store.dispatch(actions.changeLoading(true));
        expect(count).toBe(2);

        store.dispatch(actions.changeLoading(false));
        expect(count).toBe(3);
        expect(value).toBe(false);

        store.dispatch({ type: 'UNDEFINED' });
        expect(count).toBe(3);
      });
    });

    function numberSharedTest(statePropName: string, serviceProp: Observable<number>, action: (v: number) => Action): void {
      let initialValue = initialState.get(statePropName);

      serviceProp.subscribe(res => {
        count++;
        value = res;
      });

      // HELP: shouldn't we wrap each of these in a dedicated "it" function?

      // auto-emitting initial value
      expect(count).toBe(1);
      expect(value).toBe(initialValue);

      // value changes 1st time
      store.dispatch(action(50));
      expect(count).toBe(2);
      expect(value).toBe(50);

      // same value: should not emit
      store.dispatch(action(50));
      expect(count).toBe(2);

      // value changes 2nd time
      store.dispatch(action(60));
      expect(count).toBe(3);
      expect(value).toBe(60);

      // dispatching unrelated action: should not emit any new value
      store.dispatch({ type: 'UNDEFINED' });
      expect(count).toBe(3);
    }
  });

  // Test all actions methods from `filters-service`
  describe('<actions>', () => {
    let value: number;

    beforeEach(() => {
      value = 50;
      spyOn(store, 'dispatch');
    });

    const contrast: ActionInstance = () => {
      return {
        // bind(service) otherwise "this" in filters-service functions returns undefined
        service: service.changeContrast.bind(service),
        action: actions.changeContrast,
        actionName: 'CHANGE_CONTRAST'
      };
    };
    sharedObservableTest(contrast, 'changeContrast()');

    const saturate: ActionInstance = () => {
      return {
        service: service.changeSaturate.bind(service),
        action: actions.changeSaturate,
        actionName: 'CHANGE_SATURATE'
      };
    };
    sharedObservableTest(saturate, 'changeSaturate()');

    const sepia: ActionInstance = () => {
      return {
        service: service.changeSepia.bind(service),
        action: actions.changeSepia,
        actionName: 'CHANGE_SEPIA'
      };
    };
    sharedObservableTest(sepia, 'changeSepia()');

    const invert: ActionInstance = () => {
      return {
        service: service.changeInvert.bind(service),
        action: actions.changeInvert,
        actionName: 'CHANGE_INVERT'
      };
    };
    sharedObservableTest(invert, 'changeInvert()');

    const hueRotate: ActionInstance = () => {
      return {
        service: service.changeHueRotate.bind(service),
        action: actions.changeHueRotate,
        actionName: 'CHANGE_HUEROTATE'
      };
    };
    sharedObservableTest(hueRotate, 'changeHueRotate()');

    const blur: ActionInstance = () => {
      return {
        service: service.changeBlur.bind(service),
        action: actions.changeBlur,
        actionName: 'CHANGE_BLUR'
      };
    };
    sharedObservableTest(blur, 'changeBlur()');

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

    function sharedObservableTest(actionInstance: ActionInstance, testName: string) {
      describe(testName, () => {
        let serviceFunction: (value: number) => void;
        let action: (value: number) => Action;
        let actionName: string;

        beforeEach(() => {
          serviceFunction = actionInstance().service;
          action = actionInstance().action;
          actionName = actionInstance().actionName;
        });

        it(`should call store.dispatch() with ${actionName} action`, () => {
          serviceFunction(value);

          expect(store.dispatch).toHaveBeenCalledTimes(1);
          expect(store.dispatch).toHaveBeenCalledWith(action(value));

          value = 90;
          serviceFunction(value);
          expect(store.dispatch).toHaveBeenCalledTimes(2);
          expect(store.dispatch).toHaveBeenCalledWith(action(value))
        });

        it('should NOT dispatch action if value is undefined or invalid', () => {

          serviceFunction(undefined);
          expect(store.dispatch).not.toHaveBeenCalled();

          serviceFunction(null);
          expect(store.dispatch).not.toHaveBeenCalled();
        });
      });
    }

  });
});

type ActionInstance = () => {
  service: (value: number) => void,
  action: (value: number|string) => Action,
  actionName: string
}
