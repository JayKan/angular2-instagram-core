import { StoreModule } from '@ngrx/store';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { TestBed, getTestBed } from '@angular/core/testing';
import { XHRBackend, Response, ResponseOptions, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { filtersReducer } from '../reducers/filters-reducer';
import { FiltersActions } from './../actions/filters-actions';
import { FiltersService } from './../services/filters-service';
import { FiltersEffects } from './filters-effects';

describe('filter-effects', () => {
  let filtersActions: FiltersActions;
  let runner: EffectsRunner;
  let filterEffects: FiltersEffects;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [
        EffectsTestingModule,
        StoreModule.provideStore({ filters: filtersReducer }),
        HttpModule
      ],
      providers: [
        FiltersEffects,
        FiltersService,
        FiltersActions,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
    filtersActions = injector.get(FiltersActions);
    filterEffects = injector.get(FiltersEffects);
    runner = injector.get(EffectsRunner);
  });

  describe('fetchImages$', () => {
    let refactoredRecords: any;
    beforeEach(() => {
      const records = [{
        id: 1,
        urls: {
          full: 'https://url.com/full-img-1/',
          thumb: 'https://url.com/thumb-img-1/'
        }
      }, {
        id: 2,
        urls: {
          full: 'https://url.com/full-img-2/',
          thumb: 'https://url.com/thumb-img-2/'
        }
      }];

      const mockBackend: MockBackend = getTestBed().get(XHRBackend);
      mockBackend.connections.subscribe(connection => {
        if (connection.request.url === 'https://validurl.com') {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(records)
          })));
        } else {
          connection.mockError(new Error('Connection error'));
        }
      });

      refactoredRecords = records.map(record => {
        return {
          id: record.id,
          thumb: record.urls.thumb
        };
      });
    });
    it('should return FETCH_IMAGES_FULFILLED action', () => {
      const action = {
        type: FiltersActions.LOAD_IMAGES,
        payload: {
          api: 'https://validurl.com'
        }
      };
      runner.queue(action);

      filterEffects.fetchImages$.subscribe(res => {
          expect(res).toEqual(filtersActions.fetchImagesFulfilled(refactoredRecords));
      });
    });
    it('should fail and return FETCH_IMAGES_FAILED action', () => {
      const action = {
        type: FiltersActions.LOAD_IMAGES,
        payload: {
          api: 'https://non-validurl.com'
        }
      };
      runner.queue(action);

      filterEffects.fetchImages$.subscribe(res => {
          expect(res).toEqual(filtersActions.fetchImagesFailed('Error fetching images from Unsplash API. Please try again later.'));
      });
    });
  });
});
