import './App.css';
import React from "react";
import Search from './Search';
import autoBind from 'react-autobind';
import SearchBar from "react-search-bar";

//<Search username={search} />


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClear() {
    this.setState({
      suggestions: []
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Searching for: ' + this.state.value);
    event.preventDefault();
  }

  suggestionRenderer(suggestion, searchTerm) {
    return (
      <span>
        <span>{searchTerm}</span>
        <strong>{suggestion.substr(searchTerm.length)}</strong>
      </span>
    );
  }

  render() {
    return (
    <form onSubmit={this.handleSearch}>
        <input type="text" value={this.state.value} onChange={this.handleChange}>
            <Search username={this.state.value} />
          </input>
        <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default App;
