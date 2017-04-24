import { Map } from 'immutable';
import { FilterStyle, OverlayStyle } from './interfaces/index';
import { initialState } from './reducers/filters-reducer';
import {
  getFilterStyles,
  updateFilterStyle,
  getOverlayColor,
  updateOverlayStyle
} from './helpers';

describe('helpers', () => {
  describe('getFilterStyles', () => {
    it('should return a filter string', () => {
      const state = initialState;
      let filters = `contrast(${state.get('contrast')}%) `;
      filters += `brightness(${state.get('brightness')}%) `;
      filters += `saturate(${state.get('saturate')}%) `;
      filters += `sepia(${state.get('sepia')}%) `;
      filters += `grayscale(${state.get('grayScale')}%) `;
      filters += `invert(${state.get('invert')}%) `;
      filters += `hue-rotate(${state.get('hueRotate')}deg) `;
      filters += `blur(${state.get('blur')}px) `;

      const value = getFilterStyles(initialState);
      expect(value).toEqual(filters);
    });
  });

  describe('updateFilterStyle', () => {
    it('should return an object containing the FilterStyle object', () => {
      const styles: FilterStyle = {
        WebkitFilter: getFilterStyles(initialState),
        filter: getFilterStyles(initialState),
        position: 'relative'
      };
      const value = updateFilterStyle(initialState);

      expect(value).toEqual({ styles });
    });
  });

  describe('getOverlayColor', () => {
    let linearBackground: Map<string, any>;
    let radialBackground: Map<string, any>;
    let stop1: number;
    let stop2: number;
    let color1: string;
    let color2: string;

    beforeAll(() => {
      linearBackground = Map({
        a: 0.5,
        b: 253,
        g: 162,
        r: 62,
        stop: 10,
        direction: 'to bottom'
      });
      radialBackground = Map({
        a: 0.04,
        b: 70,
        g: 70,
        r: 70,
        stop: 100,
        position: 'center center',
        size: 'closest-corner'
      });
      stop1 = linearBackground.get('stop');
      stop2 = radialBackground.get('stop');
      color1 = `rgba(${linearBackground.get('r')}, ${linearBackground.get('g')}, ${linearBackground.get('b')}, ${linearBackground.get('a')})`;
      color2 = `rgba(${radialBackground.get('r')}, ${radialBackground.get('g')}, ${radialBackground.get('b')}, ${radialBackground.get('a')})`;
    });

    it('should return a solid background rgba string', () => {
      const bg = 'rgba(62, 162, 253, 0.5)';

      const value = getOverlayColor('solid_background');
      expect(value).toEqual(bg);
    });

    it('should return a linear gradient style string', () => {
      const direction = linearBackground.get('direction');
      const gradient = `linear-gradient(${direction}, ${color1} ${stop1}%, ${color2} ${stop2}%)`;

      const value = getOverlayColor('linear_gradient');
      expect(value).toEqual(gradient);
    });

    it('should return a radial gradient style string', () => {
      const position = radialBackground.get('position');
      const size = radialBackground.get('size');
      const gradient = `-webkit-radial-gradient(${position}, circle ${size}, ${color1} ${stop1}%, ${color2} ${stop2}%)`;

      const value = getOverlayColor('radial_gradient');
      expect(value).toEqual(gradient);
    });

    it('should return null', () => {
      const value = getOverlayColor('none');
      expect(value).toEqual(null);
    });

    it('should return undefined if a wrong overlayType is passed', () => {
      expect(getOverlayColor('wrongType')).toBe(undefined);
    });
  });

  describe('updateOverlayStyle', () => {
    it('should return an object containing the OverlayStyle object', () => {
      const opacity: number = initialState.get('opacity');
      const overlayBackground: string = initialState.get('blend');
      const background: string = getOverlayColor(overlayBackground);

      let overlay: OverlayStyle = {
        content: ' ',
        display: 'block',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        pointerEvents: 'none',
        position: 'absolute',
        mixBlendMode: 'normal',
        opacity: (opacity/100),
        background: background
      };

      const value = updateOverlayStyle(initialState);
      expect(value).toEqual({ overlay });
    });
  });
});
