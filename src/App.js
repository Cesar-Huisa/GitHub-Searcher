import './App.css';
import React from "react";
import Search from './Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//<Search username={search} />


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    return (
      <Route
        exact
        path={'./'}
        component={() => (
          <div className="App-content_large-header">
            <Search username={this.state.value} />
          </div>
        )}
      />
    );
  }

  render() {
    const { userName } = this.state;

    return (
      <Router>
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div className="App-main">
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
