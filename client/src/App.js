import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AddBook from './components/add-book';
import BookList from './components/book-list';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>My Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
