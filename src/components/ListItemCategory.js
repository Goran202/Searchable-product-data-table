import React, { Component } from "react";

class ListItemCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <p>{this.props.listItem.category}</p>;
  }
}

export default ListItemCategory;
