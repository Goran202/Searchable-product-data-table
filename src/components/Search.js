import React, { Component } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
import data from "./data.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { dataOriginal: data, data: data, filterValue: "" };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(e) {
    console.log("i'm here " + e.target.value);
    this.setState({ filterValue: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar onChange={this.handleFilter} />
        <List data={this.state.data} filterValue={this.state.filterValue} />
      </React.Fragment>
    );
  }
}

export default Search;
