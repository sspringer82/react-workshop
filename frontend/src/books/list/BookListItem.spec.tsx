import { fireEvent, render, screen } from '@testing-library/react';
import { Book } from '../types/Book';
import BookListItem from './BookListItem';
const book: Book = {
  id: 1,
  title: 'bla',
  author: 'asdf',
  isbn: '123',
  rating: 4,
};

describe('BookListItem', () => {
  it('should render', () => {
    render(<BookListItem book={book} remove={jest.fn()} />);

    expect(screen.getByTestId('title')).toHaveTextContent('bla');
  });

  it('should trigger the remove function on delete', () => {
    const onRemove = jest.fn();
    render(<BookListItem book={book} remove={onRemove} />);

    fireEvent.click(screen.getByTestId('delete-btn'));

    expect(onRemove).toHaveBeenCalled();
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith(book);
  });

  it('should work', () => {
    const add = jest.fn();

    add(1, 2);

    expect(add).toHaveBeenCalledWith(1, 2);
  });
});
