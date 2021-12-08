import { screen, render } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('should simply render', () => {
    render(<Component />);

    expect(screen.getByTestId('name')).toHaveTextContent('Klaus');
  });
});
