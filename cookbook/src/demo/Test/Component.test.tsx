import { screen, render } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('should simply render', () => {
    render(<Component />);

    expect(screen.getByTestId('name')).toHaveTextContent('Klaus');
  });

  it('should callback', () => {
    const func = jest.fn();
    func.mockReturnValue(42);

    expect(func(13)).toBe(42);
    expect(func).toHaveBeenCalled();
    expect(func).toHaveBeenCalledWith(13);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
