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
  })
});