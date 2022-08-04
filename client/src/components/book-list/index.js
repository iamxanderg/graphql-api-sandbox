import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../../queries/queries';
import BookDetails from '../book-details';

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [bookId, setBookId] = useState('');

  const displayBooks = () => {
    if (error) {
      return <p>{`${error}`}</p>;
    }

    if (loading) {
      return <p>Loading...</p>;
    } else {
      return data.books.map((book) => {
        return (
          <li key={book.id} onClick={() => setBookId(book.id)}>
            {book.title}
          </li>
        );
      });
    }
  };

  return (
    <div>
      <ul id='book-list'>{displayBooks()}</ul>
      <BookDetails bookId={bookId} />
    </div>
  );
}

export default BookList;
