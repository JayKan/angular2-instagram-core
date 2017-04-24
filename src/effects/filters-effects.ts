import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FiltersActions } from '../actions/filters-actions';
import { FiltersService } from '../services/filters-service';

@Injectable()
export class FiltersEffects {
  constructor(
    private actions$: Actions,
    private filtersService: FiltersService,
    private filtersActions: FiltersActions
  ) {}

  @Effect()
  fetchImages$: Observable<Action> = this.actions$
    .ofType(FiltersActions.LOAD_IMAGES)
    .switchMap(({ payload }) => {
      return this.filtersService.fetchImages(payload.api)
        .map(data => this.filtersActions.fetchImagesFulfilled(data))
        .catch(error => Observable.of(this.filtersActions.fetchImagesFailed(error)));
    });
}
