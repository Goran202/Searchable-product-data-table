import React, { Component } from "react";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <p>
          <input type="checkbox" onClick={this.props.handleClick} />
          Only show products in stock
        </p>
      </React.Fragment>
    );
  }
}

export default CheckBox;
