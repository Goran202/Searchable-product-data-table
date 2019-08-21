import React, { Component } from "react";

class ITemSingleRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <p>{this.props.listItem.name}</p>;
  }
}

export default ITemSingleRow;
