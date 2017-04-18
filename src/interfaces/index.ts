import { Map } from 'immutable';

export interface FilterStyle {
  WebkitFilter: string;
  filter: string;
  position: string;
}

export interface OverlayStyle {
  content: string;
  display: string;
  height: string;
  width: string;
  top: string;
  left: string;
  pointerEvents: string;
  position: string;
  mixBlendMode?: string;
  opacity: number;
  background: string;
}

export type FiltersState = Map<string, any>;

export interface AppState {
  filters: FiltersState;
}
