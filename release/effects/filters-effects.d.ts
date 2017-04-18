import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FiltersActions } from '../actions/filters-actions';
import { FiltersService } from '../services/filters-service';
export declare class FiltersEffects {
    private actions$;
    private filtersService;
    private filtersActions;
    constructor(actions$: Actions, filtersService: FiltersService, filtersActions: FiltersActions);
    fetchImages$: Observable<Action>;
}
