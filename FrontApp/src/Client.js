import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
// import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client'

  // Create an http link:
const httpLink = new createUploadLink({
   // uri: 'http://localhost:4002/graphql' 
    uri: 'https://api.digividz.tech/graphql'
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  // uri: `wss://localhost:4002/graphql`, 
   uri: 'wss://api.digividz.tech/graphql',
  options: { reconnect: true }
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});
// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const links = split( ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link: authLink.concat(links),
  cache: new InMemoryCache(),
 
})

export default client
