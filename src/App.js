import './App.css';
import React from "react";
import Search from './Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import router from "react-router";
import autoBind from 'react-autobind';
import SearchBar from "react-search-bar";
import User from './user/user';
import Profile from './profile';
import RepositoryList from './repository/repositorylist';
import Getlist from './repository';

//<Search username={search} />


class App extends React.Component {
  state = {
    search: '',
  };

  onOrganizationSearch = value => {
    this.setState({ search: value });
  };

  render() {
    const { userName } = this.state;

    return (
      <Router>
        <div className="App">
          <SearchBar />
          <div className="App-main">
            <Route
              exact
              path={'./'}
              component={() => (
                <div className="App-content_large-header">
                  <Search username={userName} />
                </div>
              )}
            />
            <Route
              exact
              path={'./repository'}
              component={() => (
                <div className="App-content_small-header">
                  <Getlist username={userName} />
                </div>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
