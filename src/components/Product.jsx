import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ item }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center">
      <div className="w-44 h-44 bg-white rounded-xl flex justify-center items-center mb-4">
        <img src={item.image} alt={item.title} className="h-36 w-36 object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-center">
        {item.title.length > 40 ? `${item.title.substring(0, 40)}...` : item.title}
      </h3>
      <div className="mt-4 text-center">
        <span>Price: </span>
        <span className="font-bold">{item.price}</span> 
      </div>
      <div className="flex gap-4 mt-4">
        <button className="bg-white text-gray-800 p-2 rounded-md">Add to Cart</button>
        <button className="bg-white text-gray-800 p-2 rounded-md">Buy Now</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.item,
};

export default Product;
