import React from 'react';
import ListItem from './ListItem';

const List = ({ data, filterValue, inStockCondition }) => {
  let lastCategoryName = '';
  let renderCategory = true;
  return (
        <>
        <h1>Name Price</h1>
        <ul>
          {data.map(listItem => {
            if (
              listItem.name.includes(filterValue) &&
              (!inStockCondition || listItem.stocked)
            ) {
              renderCategory = listItem.category !== lastCategoryName;
              lastCategoryName = listItem.category;
              return (
                <ListItem listItem={listItem} renderCategory={renderCategory} />
              );
            }
            return null;
          })}
        </ul>
      </>
  );
}

export default List;
