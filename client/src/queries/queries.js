import { gql } from '@apollo/client';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      title
      id
    }
  }
`;

const addBookMutation = gql`
  mutation ($title: String!, $genre: String!, $authorId: String!) {
    addBook(title: $title, genre: $genre, authorId: $authorId) {
      title
      id
    }
  }
`;

const getBookQuery = gql`
  query ($bookId: ID!) {
    book(id: $bookId) {
      id
      title
      genre
      author {
        id
        name
        age
        books {
          title
          id
        }
      }
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
