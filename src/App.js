import './App.css';
import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

const Profile = () => (
  <Query query={GET_CURRENT_USER}>
    {() => <div>nada?</div>}
  </Query>
);


const App = () => (
  <Profile />
);

export default App;
