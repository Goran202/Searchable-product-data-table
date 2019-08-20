import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //return <p>List</p>;
    return (
      <React.Fragment>
        <h1>Name Price</h1>
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </React.Fragment>
    );
  }
}

export default List;
