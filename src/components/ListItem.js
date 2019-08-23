import React from 'react';
import PropTypes from 'prop-types';
import ListItemCategory from './ListItemCategory';
import ItemSingleRow from './ItemSingleRow';

const ListITem = ({ listItem, renderCategory }) => {
  return (
    <>
      {renderCategory === true ? <ListItemCategory listItem={listItem} /> : ''}
      <ul>
        <ItemSingleRow style={{ color: 'red' }} listItem={listItem} />
      </ul>
    </>
  );
};

ListITem.propTypes = {
  listItem: PropTypes.object.isRequired,
  renderCategory: PropTypes.bool.isRequired,
};

export default ListITem;
