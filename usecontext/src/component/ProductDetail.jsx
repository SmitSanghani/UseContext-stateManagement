import React from 'react';

const ProductDetail = ({ data, theme }) => {
  return (
    <div style={{ backgroundColor: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black" }}>
      <h1>{data.title}</h1>
      <h1>{data.brand}</h1>
      <h1>{data.name}</h1>
      <h1>{data.price}</h1>
      <h1>{data.category}</h1>
    </div>
  );
};

export default ProductDetail;
