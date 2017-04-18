import { Action } from '@ngrx/store';
import { FiltersState, FilterStyle, OverlayStyle } from '../interfaces';
export declare const initialState: FiltersState;
export declare function filtersReducer(state: FiltersState, {type, payload}: Action): FiltersState;
export declare function getFilterStyles(state: FiltersState): string;
export declare function updateFilterStyle(state: FiltersState): {
    styles: FilterStyle;
};
export declare function getOverlayColor(overlayType: string): string;
export declare function updateOverlayStyle(state: FiltersState): {
    overlay: OverlayStyle;
};
