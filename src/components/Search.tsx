import React, { Component } from 'react';

type SearchState = {
  input: string;
};

class Search extends Component<object, SearchState> {
  constructor(props: object) {
    super(props);
    this.state = {
      input: '',
    };
  }
  componentDidMount() {
    const inputValue = localStorage.getItem('input');
    if (inputValue) {
      this.setState({ input: inputValue });
    }
  }
  render() {
    return (
      <>
        <input
          className="search"
          type="text"
          placeholder="Search card"
          defaultValue={this.state.input}
        />
      </>
    );
  }
}

export default Search;
