import { useQuery } from '@apollo/client';
import { getBookQuery } from '../../queries/queries';

function BookDetails(props) {
  const { bookId } = props;
  const { loading, data } = useQuery(getBookQuery, {
    variables: { bookId: bookId },
  });

  const displayBookDetails = () => {
    if (!bookId) return <p>No book selected...</p>;

    if (data?.book) {
      return (
        <div>
          <h2>{data.book.title}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author:</p>
          <ul className='other-books'>
            {data.book.author.books.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })}
          </ul>
        </div>
      );
    }
  };

  return <div id='book-details'>{!loading && displayBookDetails()}</div>;
}

export default BookDetails;
