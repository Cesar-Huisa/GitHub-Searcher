import React from "react";
import gql from 'graphql-tag';
import Userlist from "./user/userlist";
import { Query } from 'react-apollo';
import ErrorMessage from './error';

const GET_USER_BY_NAME= gql`
  query ($username: String!, $cursor: String) {
    search(query: $username, type: USER, first: 10, after: $cursor) {
      edges {
        node {
          ...user
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  

  fragment user on User {
    name
    location
    login
    repositories{
      totalCount
    }
    avatarUrl
  }
`;

const Search =  ({ username })  => (
  <Query 
    query={GET_USER_BY_NAME}
    variables={{
      username,
    }}
    notifyOnNetworkStatusChange={true}
  >
    {({ data, Loading,error, fetchMore}) => {
      if (error) {
        return <ErrorMessage error={error} />;
      }

      const { search } = data;

      if (Loading && !search) {
        return <Loading />;
      }
      if (!search) {
        return null;
      }
      
      return <Userlist
        search={search}
        loading={Loading}
        entry={'search'}
        fetchMore={fetchMore}
      />
    }}
  </Query>
);


export default Search;