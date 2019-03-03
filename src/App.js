import './App.css';
import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_CURRENT_USER = gql`
  {
    viewer {
      name
    }
  }
`;

const Profile = () => (
  <Query query={GET_CURRENT_USER}>
    {({ data }) => {
      const { viewer } = data;
      return (
        <div>
          {viewer.name}
        </div>
      );
    }}
  </Query>
);

const Username = () => (
  <Query
    query={gql`
    {
      user(name:${this.props.names}) {
        repositories {
          nodes {
            name
            url
          }
        }
      }
    }
    `}
  >
    {({ data }) => {
      const { userg } = data;
      return (
        <div>
          {userg.name}
          <link>{userg.url}</link>
        </div>
        
      );
    }}
  </Query>
);

const App = () => (
  <Profile />
);

export default App;
