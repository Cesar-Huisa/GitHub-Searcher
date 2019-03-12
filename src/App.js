import './style.css';
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
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  render() {


    return (
      <Router>
        <div className="App">
        <h1>Github Users</h1>
          <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.handleChange}/>            
          </form>
          <div className="App-main">
            <Route
              exact
              path={'/'}
              component={() => (
                <div className="App-content_large-header">
                  <Search username={this.state.value} />
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
