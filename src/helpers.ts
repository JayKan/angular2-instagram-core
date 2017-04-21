import { Map } from 'immutable';
import { FiltersState, FilterStyle, OverlayStyle } from './interfaces';

export function getFilterStyles(state: FiltersState): string {
  let filters = '';
  filters += `contrast(${state.get('contrast')}%) `;
  filters += `brightness(${state.get('brightness')}%) `;
  filters += `saturate(${state.get('saturate')}%) `;
  filters += `sepia(${state.get('sepia')}%) `;
  filters += `grayscale(${state.get('grayScale')}%) `;
  filters += `invert(${state.get('invert')}%) `;
  filters += `hue-rotate(${state.get('hueRotate')}deg) `;
  filters += `blur(${state.get('blur')}px) `;
  return filters;
}

export function updateFilterStyle(state: FiltersState): { styles: FilterStyle } {
  let styles: FilterStyle = {
    WebkitFilter: getFilterStyles(state),
    filter: getFilterStyles(state),
    position: 'relative'
  };

  return {
    styles
  };
}

export function getOverlayColor(overlayType: string): string {
  const solidBackground = Map({
    a: 0.5,
    b: 253,
    g: 162,
    r: 62
  });
  const linearBackground = Map({
    a: 0.5,
    b: 253,
    g: 162,
    r: 62,
    stop: 10,
    direction: 'to bottom'
  });
  const radialBackground = Map({
    a: 0.04,
    b: 70,
    g: 70,
    r: 70,
    stop: 100,
    position: 'center center',
    size: 'closest-corner'
  });

  const stop1 = linearBackground.get('stop');
  const stop2 = radialBackground.get('stop');
  const color1 = `rgba(${linearBackground.get('r')}, ${linearBackground.get('g')}, ${linearBackground.get('b')}, ${linearBackground.get('a')})`;
  const color2 = `rgba(${radialBackground.get('r')}, ${radialBackground.get('g')}, ${radialBackground.get('b')}, ${radialBackground.get('a')})`;

  switch (overlayType) {
    case 'solid_background':
      return `rgba(${solidBackground.get('r')}, ${solidBackground.get('g')}, ${solidBackground.get('b')}, ${solidBackground.get('a')})`;
    case 'linear_gradient':
      const direction = linearBackground.get('direction');
      return `linear-gradient(${direction}, ${color1} ${stop1}%, ${color2} ${stop2}%)`;
    case 'radial_gradient':
      const position = radialBackground.get('position');
      const size = radialBackground.get('size');
      return `-webkit-radial-gradient(${position}, circle ${size}, ${color1} ${stop1}%, ${color2} ${stop2}%)`;
    case 'none':
      return null;
  }
}

export function updateOverlayStyle(state: FiltersState): { overlay: OverlayStyle } {
  const opacity: number = state.get('opacity');
  const overlayBackground: string = state.get('blend');
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

  return {
    overlay
  };
}
