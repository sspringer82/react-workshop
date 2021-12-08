import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Recipe from '../shared/Recipe';
import RecipeListItem from './RecipeListItem';

describe('RecipeListItem', () => {
  it('should render', () => {
    // arrange
    const recipe: Recipe = {
      id: 1,
      title: 'Nudelsuppe',
      ingredients: [],
      steps: [],
    };

    // act
    act(() => {
      render(
        <MemoryRouter>
          <RecipeListItem recipe={recipe} onDelete={jest.fn()} />
        </MemoryRouter>,
      );
    });

    // assert
    expect(screen.getByTestId('title')).toHaveTextContent('Nudelsuppe');
  });
});
