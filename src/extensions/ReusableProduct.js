import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImageWithLoading from '../components/ImageLoad';

const ReUsableProduct = ({ item }) => {
  return (
    <div className='productsContainer' key={item.id} >
      <Link to={`/product/${item.id}`} className='productImage'>
        {item.image && <ImageWithLoading loading="lazy" src={item.image} alt="uploaded" width="100" />}
      </Link>
      <div className='productDetails'>
        <p className='productName'>{item.text}</p>
        <span className='productPrice'>Shs.{item.price}</span>
      </div>
      <button>Order Now</button>
    </div>
  );
};

ReUsableProduct.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired, // Ensure id is a string
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.string.isRequired, // Ensure price is a string
    category: PropTypes.string.isRequired,
    collection: PropTypes.string.isRequired,
  }).isRequired,
  setEditingItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};           

export default ReUsableProduct;
