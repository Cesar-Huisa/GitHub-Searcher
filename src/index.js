import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './Search';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "react-apollo";
require('dotenv').load();


const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const httpLink = new HttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
      authorization: `Bearer ${
        process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
        }`
    },
    });
const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache,
});


var a = document.getElementById('tfnewsearch');
a.addEventListener('submit',function(e) {
    e.preventDefault();
    var b = document.getElementById('tftextinput').value.search;
    ReactDOM.render(<Search name={b}/>, document.getElementById('tftextinput'));
});


ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
);

