import React, { Component } from "react";
import Input from "./Input";

export function buildSearchInput(input, setInput) {
  return (
    <Input
      variant="filter"
      size="md"
      value={input}
      placeholder="Search"
      onChange={e => setInput(e.target.value)}
      className="w-full"
    />
  );
}

class SearchHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.setInput = this.setInput.bind(this);
  }

  setInput(value) {
    this.setState({
      input: value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.input !== prevState.input) {
      this.props.filterSearch(this.state.input);
    }
  }

  render() {
    return (
      <div className="inset-x-0 top-0 bg-secondaryBackground rounded-t-xl flex flex-col items-center shadow-search py-2 px-4">
        <h4 className="text-base font-bold pb-2">{this.props.title}</h4>
        {this.props.buildInput(this.state.input, this.setInput)}
      </div>
    );
  }
}

export default SearchHeader;
