import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from '../../queries/queries';

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);
  const [bookTitle, setBookTitle] = useState();
  const [bookGenre, setBookGenre] = useState();
  const [authorId, setAuthorId] = useState();

  const displayAuthors = () => {
    if (error) {
      console.log('error: ', error);
    }

    if (loading) {
      return <option>Loading...</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addBook({
      variables: { title: bookTitle, genre: bookGenre, authorId: authorId },
      refetchQueries: [{ query: getBooksQuery }],
    });

    console.log('bookTitle: ', bookTitle);
    console.log('bookGenre: ', bookGenre);
    console.log('authorId: ', authorId);
  };

  return (
    <form id='add-book' onSubmit={(e) => handleOnSubmit(e)}>
      <div className='field'>
        <label>Book title:</label>
        <input type='text' onChange={(e) => setBookTitle(e.target.value)} />
      </div>

      <div className='field'>
        <label>Genre:</label>
        <input type='text' onChange={(e) => setBookGenre(e.target.value)} />
      </div>

      <div className='field'>
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBook;
