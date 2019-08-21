import React, { Component } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
import data from "./data.js";
import CheckBox from "./checkBox.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataOriginal: data,
      data: data,
      filterValue: "",
      inStockCondition: false
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleFilter(e) {
    console.log("i'm here " + e.target.value);
    this.setState({ filterValue: e.target.value });
  }
  handleClick(e) {
    console.log("YUPIIIIIII " + e.target.checked);
    this.setState({ inStockCondition: e.target.checked });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar onChange={this.handleFilter} />
        <CheckBox handleClick={this.handleClick} />
        <List
          data={this.state.data}
          filterValue={this.state.filterValue}
          inStockCondition={this.state.inStockCondition}
        />
      </React.Fragment>
    );
  }
}

export default Search;
