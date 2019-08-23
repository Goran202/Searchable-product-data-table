import React from 'react';

const ITemSingleRow = (props) => {
  const { listItem } = props;
  const { stocked, name, price } = listItem;
  return (
    <p style={stocked ? { color: 'blue' } : { color: 'red' }}>{`${name}   ${price}`}</p>
  );
};
export default ITemSingleRow;
