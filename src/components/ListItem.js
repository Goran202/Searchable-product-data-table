import React, { Component } from 'react';
import ListItemCategory from './ListItemCategory';
import ItemSingleRow from './ItemSingleRow';

class ListITem extends Component {
  state = {};

  render() {
    return (
      <>
        {this.props.renderCategory === true ? (
          <ListItemCategory listItem={this.props.listItem} />
        ) : (
          ''
        )}
        <ul>
          <ItemSingleRow
            style={{ color: 'red' }}
            listItem={this.props.listItem}
          />
        </ul>
      </>
    );
  }
}

export default ListITem;
