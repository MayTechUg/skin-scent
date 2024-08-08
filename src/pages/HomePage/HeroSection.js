import React, { useState, useEffect } from 'react';
import Products from './Products';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState('latest');

  // Set default category to 'featured' when component mounts
  useEffect(() => {
    setSelectedCategory('latest');
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <section className='Hero'>
        <h5>FEATURED PRODUCTS</h5>
        <div className='productCategory'>
          <h6 onClick={() => handleCategoryClick('latest')}>LATEST</h6>
          <h6 onClick={() => handleCategoryClick('special')}>SPECIAL</h6>
          <h6 onClick={() => handleCategoryClick('trending')}>TRENDING</h6>
        </div>
      </section>
      <Products category={selectedCategory} />
      <Link className='allProductsButton'to='/products'>
        <button className='allProductsbutton'>View All Products</button>
      </Link>
    </>
  );
};

export default Hero;
