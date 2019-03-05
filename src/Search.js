import React from "react";
import gql from 'graphql-tag';
import Userlist from "./user/userlist";
import { Query } from 'react-apollo';
import Loading from './loading';

const GET_KEVIN = gql`
  {
    search(query:"kevin", type: USER) {
      email
      login
      name
    }
  }
`;

const Search = () => (
  <Query query={GET_KEVIN}>
    {({ data, loading}) => {
      if(!data) {
        return null;
      }
      const { usersls } = data;
      

      if (loading) {
        return <Loading />;
      }

      return <Userlist users={usersls} />;
    }}
  </Query>
);

export default Search;