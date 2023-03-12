import React, { ChangeEvent, Component } from 'react';

type SearchState = {
  input: string;
};

class Search extends Component<object, SearchState> {
  constructor(props: object) {
    super(props);
    this.state = {
      input: '',
    };
    this.updateInput = this.updateInput.bind(this);
  }
  componentDidMount() {
    const inputValue = localStorage.getItem('input');
    if (inputValue) {
      this.setState({ input: inputValue });
    }
  }
  componentWillUnmount() {
    localStorage.input = this.state.input;
  }
  updateInput(event: ChangeEvent) {
    const target = event.target as HTMLInputElement;
    this.setState({ input: target.value });
    console.log(this.state.input);
  }
  render() {
    return (
      <>
        <input
          className="search"
          type="text"
          placeholder="Search card"
          defaultValue={this.state.input}
          onChange={this.updateInput}
        />
      </>
    );
  }
}

export default Search;
