import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RepositoryList from './repositorylist'
import Loading from '../loading';

const GET_REPOS_OF_USER= gql`
  query($username: String!, $cursor: String) {
    user(login: $username) {
      repositories(first: 5, after: $cursor) {
        edges {
          node {
            ...repository
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }

  fragment repository on Repository {
    id
    name
    url
    descriptionHTML
    primaryLanguage {
      name
    }
    owner {
      login
      url
    }
    stargazers {
      totalCount
    }
    viewerHasStarred
    watchers {
      totalCount
    }
    viewerSubscription
  }
`;

const Getlist = ({username})  => (
    
    <Query 
      query={GET_REPOS_OF_USER}
      variables={{
        username,
      }}
      skip={username === ''}
    >
      {({ data, loading}) => {
        if(!data) {
          return null;
        }
  
        const { reposls} = data;
        
        if (loading && !reposls) {
          return <Loading />;
        }
  
        return <RepositoryList repositories={reposls} />;
      }}
    </Query>
  );

  export default Getlist;