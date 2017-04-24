import { Action } from '@ngrx/store';
import { Map } from 'immutable';
import { FiltersState } from '../interfaces';
export declare const DEFAULTS: Map<string, string | number>;
export declare const initialState: FiltersState;
export declare function filtersReducer(state: FiltersState, {type, payload}: Action): FiltersState;
