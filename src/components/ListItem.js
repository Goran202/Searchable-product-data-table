import React, { Component } from "react";
import ListItemCategory from "./ListItemCategory";
import ItemSingleRow from "./ItemSingleRow";

class ListITem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <ListItemCategory />
        <ul>
          <ItemSingleRow />
          <ItemSingleRow />
          <ItemSingleRow />
        </ul>
      </React.Fragment>
    );
  }
}

export default ListITem;
