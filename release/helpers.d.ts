import { FiltersState, FilterStyle, OverlayStyle } from './interfaces';
export declare function getFilterStyles(state: FiltersState): string;
export declare function updateFilterStyle(state: FiltersState): {
    styles: FilterStyle;
};
export declare function getOverlayColor(overlayType: string): string;
export declare function updateOverlayStyle(state: FiltersState): {
    overlay: OverlayStyle;
};
