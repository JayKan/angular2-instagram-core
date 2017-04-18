import { FiltersActions } from './filters-actions';

describe('filters-actions', () => {
  let actions: FiltersActions;

  beforeEach(() => {
    actions = new FiltersActions();
  });

  describe('changeContrast()', () => {
    it('should create an action', () => {
      const value = 3;
      const type = 'contrast';
      let action = actions.changeContrast(value);

      expect(action).toEqual({
        type: FiltersActions.CHANGE_CONTRAST,
        payload: { value, type }
      });
    });
  });

  describe('changeBrightness()', () => {
    it('should create an action', () => {
      const value = 100;
      const type = 'brightness';
      const action = actions.changeBrightness(value);

      expect(action).toEqual({
        type: FiltersActions.CHANGE_BRIGHTNESS,
        payload: { value, type }
      });
    });
  });

  describe('changeSaturate()', () => {
    it('should create an action', () => {
      const value = 100;
      const type = 'saturate';
      const action = actions.changeSaturate(value);

      expect(action).toEqual({
        type: FiltersActions.CHANGE_SATURATE,
        payload: { value, type }
      });
    });
  });

  describe('changeSepia()', () => {
    it('should create an action', () => {
      const value = 5;
      const type = 'sepia';
      const action = actions.changeSepia(value);

      expect(action).toEqual({
        type: FiltersActions.CHANGE_SEPIA,
        payload: { value, type }
      });
    });
  });

  describe('changeGrayScale()', () => {
    it('should create an action', () => {
      const value = 5;
      const type = 'grayScale';
      const action = actions.changeGrayScale(value);

      expect(action).toEqual({
        type: FiltersActions.CHANGE_GRAYSCALE,
        payload: { value, type }
      });
    });
  });

  describe('changeInvert()', () => {
    it('should create an action', () => {
      const value = 5;
      const type = 'invert';
      const action = actions.changeInvert(value);

      expect(action).toEqual({
        type: FiltersActions.CHANGE_INVERT,
        payload: { value, type }
      });
    });
  });

  describe('changeHueRotate()', () => {
    it('should create an action', () => {
      const value = 5;
      const type = 'hueRotate';
      const action = actions.changeHueRotate(value);

      expect(action).toEqual({
        type: FiltersActions.CHANGE_HUEROTATE,
        payload: { value, type }
      });
    });
  });

  describe('changeBlur()', () => {
    it('should create an action', () => {
      const value = 5;
      const type = 'blur';
      const action = actions.changeBlur(value);

      expect(action).toEqual({
        type: FiltersActions.CHANGE_BLUR,
        payload: { value, type }
      });
    });
  });

  describe('changeBlend()', () => {
    it('should create an action', () => {
      const value = 'none';
      const type = 'blend';
      const action = actions.changeBlend(value);

      expect(action).toEqual({
        type: FiltersActions.CHANGE_BLEND,
        payload: { value, type }
      });
    });
  });

  describe('changeLoading()', () => {
    it('should create an action', () => {
      const value = true;
      const type = 'loading';
      const action = actions.changeLoading(value);

      expect(action).toEqual({
        type: FiltersActions.LOADING,
        payload: { value }
      });
    });
  });

  describe('changePreset', () => {
    it('should create an action', () => {
      const figureStyle = {
        WebkitFilter: 'contrast(90%) sepia(20%)',
        position: 'relative'
      };
      const overlayStyle = {
        display: 'block',
        width: '100%',
        position: 'absolute'
      };
      const key = 'earlybird';
      const action = actions.changePreset({ figureStyle, overlayStyle, key});

      expect(action).toEqual({
        type: FiltersActions.CHANGE_PRESET,
        payload: { figureStyle, overlayStyle, key }
      });
    });
  });

  describe('loadImages()', () => {
    it('should create an action', () => {
      const action = actions.loadImages();

      expect(action).toEqual({
        type: FiltersActions.LOAD_IMAGES,
        payload: {
          api: FiltersActions.API
        }
      });
    });
  });

  describe('fetchImagesFailed()', () => {
    it('should create an action', () => {
      const error = {
        message: 'No images found'
      };
      const action = actions.fetchImagesFailed(error);

      expect(action).toEqual({
        type: FiltersActions.FETCH_IMAGES_FAILED,
        payload: { error }
      });
    });
  });

  describe('fetchImagesFulfilled()', () => {
    it('should create an action', () => {
      const data = [
        { id: '6Tf2XGaaTrQ', thumb: 'https://someurl.com' },
        { id: 'yr6O2US7YY8', thumb: 'https://someotherurl.com' }
      ];
      const action = actions.fetchImagesFulfilled(data);

      expect(action).toEqual({
        type: FiltersActions.FETCH_IMAGES_FULFILLED,
        payload: { data }
      });
    });
  });

  describe('changeSelectedImage()', () => {
    it('should create an action', () => {
      const value = 'https://imageurl/800x600';
      const type = 'selectedImage';
      const action = actions.changeSelectImage(value);

      expect(action).toEqual({
        type: FiltersActions.CHANGE_SELECTED_IMAGE,
        payload: { value, type }
      });
    });
  });

  describe('resetToDefaults()', () => {
    it('should create an action', () => {
      const action = actions.resetToDefaults();

      expect(action).toEqual({
        type: FiltersActions.RESET_DEFAULTS
      });
    });
  });
});
