import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Store, StoreModule, Action } from '@ngrx/store';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Map as ImmutableMap } from 'immutable';
import 'rxjs/add/operator/finally';

import { filtersReducer, initialState, DEFAULTS } from '../reducers';
import { FiltersActions } from '../actions';
import { FiltersService } from './filters-service';
import { AppState } from '../interfaces';
import { presets } from '../constants';
import { updateFilterStyle, updateOverlayStyle } from '../helpers';

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
        { provide: XHRBackend, useClass: MockBackend }
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
        const initialValue = initialState.get('blend');

        service.blend$.subscribe(res => {
          count++;
          value = res;
        });

        expect(count).toBe(1);
        expect(value).toBe(initialValue);

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

        let newValue = {
          figureStyle: initialState.get('styles'),
          overlayStyle: ImmutableMap(Object.assign({}, initialState.get('overlay').toJS(), { background: 'solid_background' })),
          key: 'aden'
        };

        // test after changing the overlayStyle part of the payload
        store.dispatch(actions.changePreset(newValue));
        expect(count).toBe(2);
        expect(value).toEqual(newValue.overlayStyle.toJS());

        // not changing overlayStyle.background shouldn't emit any new value
        const overlayStyle = newValue.overlayStyle.set('display', 'inline');
        newValue.overlayStyle = overlayStyle;
        store.dispatch(actions.changePreset(newValue));
        expect(count).toBe(2);
      });
    });

    describe('filterStyle$ observable', () => {
      it('should stream the current filterStyle from store', () => {
        const state = initialState
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

        service.filterStyle$.subscribe(res => {
          count++;
          value = res;
        });

        expect(count).toBe(1);
        expect(value).toEqual(state.get('styles').toJS());

        const newValue = {
          figureStyle: ImmutableMap(Object.assign({}, state.get('styles').toJS(), { filter: 'blur(20px)' })),
          overlayStyle: initialState.get('overlay'),
          key: 'aden'
        };

        // test after changing the figureStyle part of the payload
        store.dispatch(actions.changePreset(newValue));
        expect(count).toBe(2);
        expect(value).toEqual(newValue.figureStyle.toJS());

        // not changing figureStyle.webkitFilter or figureStyle.filter shouldn't emit any new value
        const figureStyle = newValue.figureStyle.set('position', 'absolute');
        newValue.figureStyle = figureStyle;
        store.dispatch(actions.changePreset(newValue));
        expect(count).toBe(2);
      });
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

        // TODO: triggering the default event returns the same array of images
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
      it('should call store.dispatch() with changeBlend() action', () => {
        service.changeBlend('blend');
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changeBlend('blend'));

        service.changeBlend('none');
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changeBlend('none'));
      });
    });

    describe('changePreset()', () => {
      it('should call store.dispatch() with changePreset() action', () => {
        let value = changePreset({ position: 'absolute' }, { display: 'inline' });
        service.changePreset(value);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changePreset(value));

        value = changePreset({ position: 'relative' }, { display: 'block' });
        service.changePreset(value);
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changePreset(value));
      });
    });

    describe('changeSelectImage()', () => {
      it('should call store.dispatch() with changeSelectImage() action', () => {
        let value = 'https://url/image-1/';
        service.changeSelectImage(value);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changeSelectImage(value));

        value = 'https://url/image-2/';
        service.changeSelectImage(value);
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changeSelectImage(value));
      });
    });

    describe('loadAllImages()', () => {
      it('should call store.dispatch() with loadImages() action', () => {
        service.loadAllImages();
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(actions.loadImages());
      });
    });

    describe('resetToDefaults()', () => {
      it('should call store.dispatch() with resetToDefaults() action', () => {
        service.resetToDefaults()
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(actions.resetToDefaults());
      });
    });

    describe('changeLoading()', () => {
      it('should call store.dispatch() with changeLoading() action', () => {
        service.changeLoading(true);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changeLoading(true));

        service.changeLoading(false);
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith(actions.changeLoading(false));
      });
    });

    describe('fetchImages()', () => {
      it('should return an Observable<any> with a list of images', () => {
          const mockBackend: MockBackend = getTestBed().get(XHRBackend);
          const res = [{
            id: 1,
            urls: {
              full: 'https://url.com/big-image-1/',
              thumb: 'https://url.com/thumb-image-1/',
            }
          }, {
            id: 2,
            urls: {
              full: 'https://url.com/big-image-2/',
              thumb: 'https://url.com/thumb-image-2/',
            }
          }];

          mockBackend.connections.subscribe((connection) => {
            // fake the http response of the api
            if (connection.request.url === 'https://validurl.com'){
              connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(res)
              })));
            } else {
              connection.mockError(new Error('Connection error'));
            }
          });

          // test cache to be empty
          expect(service.cache.size).toBe(0);

          // HELP: do you know of any better way to test if the observable
          // terminated with an error instead of using .finally()?

          let connectionError = false;
          // test with a valid url
          service.fetchImages('https://validurl.com').finally(() => {
            expect(connectionError).toBeFalsy();
          }).subscribe(res => {
            expect(res.length).toBe(2);
            expect(res[1].thumb).toBe('https://url.com/thumb-image-2/');
            // check cache to have the new value
            expect(service.cache.get('https://validurl.com')).toEqual(res);
          }, err => {
            connectionError = true;
          }).unsubscribe();

          // test with an invalid url to simulate an error
          service.fetchImages('https://invalidurl.com').finally(() => {
            expect(connectionError).toBeTruthy();
          }).subscribe(() => {}, err => {
            connectionError = true;
          }).unsubscribe();
      });
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

        it(`should call store.dispatch() with ${testName} action`, () => {
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
type ObservableInstance = () => {
  service: Observable<any>;
  action: (value: number) => Action
}
interface Preset {
  figureStyle: ImmutableMap<any, any>;
  overlayStyle: ImmutableMap<any, any>;
  key: string;
}
function changePreset(figureStyleObj: any, overlayStyleObj: any, key: string = 'aden'): Preset {
  return {
    figureStyle: ImmutableMap(Object.assign({}, initialState.get('styles').toJS(), figureStyleObj)),
    overlayStyle: ImmutableMap(Object.assign({}, initialState.get('overlay').toJS(), figureStyleObj)),
    key: key
  }
}
