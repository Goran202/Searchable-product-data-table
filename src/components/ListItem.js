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
        {this.props.renderCategory === true ? (
          <ListItemCategory listItem={this.props.listItem} />
        ) : (
          ""
        )}
        <ul>
          <ItemSingleRow listItem={this.props.listItem} />
        </ul>
      </React.Fragment>
    );
  }
}

export default ListITem;
