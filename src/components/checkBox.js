import React from 'react';


const CheckBox = ({ handleClick }) => (
  <>
    <p>
      <input type="checkbox" onClick={handleClick} />
      Only show products in stock
    </p>
  </>
);

export default CheckBox;
