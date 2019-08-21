import React, { Component } from "react";

class ITemSingleRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <p
        style={
          this.props.listItem.stocked ? { color: "blue" } : { color: "red" }
        }
      >
        {this.props.listItem.name + "   " + this.props.listItem.price}
      </p>
    );
  }
}

export default ITemSingleRow;
