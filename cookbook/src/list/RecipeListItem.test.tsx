import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Recipe from '../shared/Recipe';
import RecipeListItem from './RecipeListItem';

describe('RecipeListItem', () => {
  // arrange
  const recipe: Recipe = {
    id: 1,
    title: 'Nudelsuppe',
    ingredients: [],
    steps: [],
  };
  it('should render', () => {
    // act
    act(() => {
      render(
        <MemoryRouter>
          <RecipeListItem recipe={recipe} onDelete={jest.fn()} />
        </MemoryRouter>,
      );
    });

    // assert
    expect(screen.getByTestId('title').textContent).toBe('Nudelsuppe');
  });

  it('should trigger onDelete when the delete button is clicked', () => {
    const onDeleteSpy = jest.fn();

    act(() => {
      render(
        <MemoryRouter>
          <RecipeListItem recipe={recipe} onDelete={onDeleteSpy} />
        </MemoryRouter>,
      );
    });

    fireEvent.click(screen.getByTestId('delete-button'));

    expect(onDeleteSpy).toHaveBeenCalledTimes(1);
    expect(onDeleteSpy).toHaveBeenCalledWith(1);
  });

  it('should do a snapshot', () => {
    // act
    const { asFragment } = render(
      <MemoryRouter>
        <RecipeListItem recipe={recipe} onDelete={jest.fn()} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
