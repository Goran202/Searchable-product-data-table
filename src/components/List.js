import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fRenderCategory(category, lastCategory) {
    let renderCategory;
    if (category === lastCategory) {
      renderCategory = false;
    } else {
      renderCategory = true;
    }
    return renderCategory;
  }

  render() {
    let lastCategoryName = "";
    let renderCategory = true;
    console.log(this.props.filterValue);
    return (
      <React.Fragment>
        <h1>Name Price</h1>
        <ul>
          {this.props.data.map(listItem => {
            if (listItem.name.includes(this.props.filterValue)) {
              renderCategory = this.fRenderCategory(
                listItem.category,
                lastCategoryName
              );
              lastCategoryName = listItem.category;
              return (
                <ListItem listItem={listItem} renderCategory={renderCategory} />
              );
            }
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default List;
