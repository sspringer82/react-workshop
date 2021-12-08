import { render, act, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipesProvider from '../RecipeContext';
import RecipeList from './RecipeList';

describe('RecipeList', () => {
  it('should render data from server', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve([
            {
              id: 1,
              title: 'Nudelsuppe',
              ingredients: [],
              steps: [],
            },
            {
              id: 2,
              title: 'Schnitzel',
              ingredients: [],
              steps: [],
            },
          ]);
        },
      }),
    );

    await act(async () => {
      await render(
        <MemoryRouter>
          <RecipesProvider>
            <RecipeList />
          </RecipesProvider>
        </MemoryRouter>,
      );
    });

    const titles = screen.getAllByTestId('title');
    expect(titles).toHaveLength(2);
    expect(titles[0]).toHaveTextContent('Nudelsuppe');
    expect(titles[1]).toHaveTextContent('Schnitzel');
  });
});
