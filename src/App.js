import './App.css';
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Query } from "react-apollo";
import gql from "graphql-tag";
require('dotenv').load();


const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
  cache,
});

const GET_CURRENT_USER = gql`
  {
    user {
      name
    }
  }
`;

const Profile = () => (
  <Query query={GET_CURRENT_USER}>
    {() => <div>hola</div>}
  </Query>
);


const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Profile />
    </div>
  </ApolloProvider>
);

export default App;
