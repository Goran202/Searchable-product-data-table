import React, { Component } from "react";
import SearchBar from "./SearchBar";
import List from "./List";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <List />
      </React.Fragment>
    );
  }
}

export default Search;
