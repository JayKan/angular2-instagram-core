import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Map } from 'immutable';
import {
  getFiltersState,
  getFilterStyleValue,
  getOverlayStyleValue
} from './selectors';

import { AppState, FiltersState } from '../interfaces';

describe('selectors', () => {
  let appState: AppState;
  let appState$: Observable<AppState>;

  beforeEach(() => {
      const filters: FiltersState = Map({
        contrast:   100,
        brightness: 100,
        saturate:   100,
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
          mixBlendMode: 'normal'
        })
      });
      appState = { filters };
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

});
