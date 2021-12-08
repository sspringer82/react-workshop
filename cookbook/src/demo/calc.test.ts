import Calc from './calc';

describe('Calc', () => {
  let calc: Calc;

  beforeEach(() => {
    // arrange
    calc = new Calc();
  });

  describe('add', () => {
    it('should add 1 and 1 and return 2', () => {
      // act
      const result = calc.add(1, 1);
      // assert
      expect(result).toBe(2);
      expect(result).toBeGreaterThan(1);
      expect(result).toBeLessThan(3);
    });

    it('should add 2 and 1 and return 3', () => {
      // act
      const result = calc.add(2, 1);
      // assert
      expect(result).toBe(3);
    });
  });
});
