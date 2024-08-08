import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/homePage.css';
import makeUp from '../../assets/images/panoramic-banner-with-makeup-cosmetic-products_1064589-622.jpg';
import special from '../../assets/images/cream-lotion-cosmetic-bottle-display-presentation-mockup-cosmetic-bottle-product-packaging_552988-895.jpg';
import latest from '../../assets/images/natural-elements-spa-with-beauty-cream.jpg';
import trending from '../../assets/images/mock-up-white-cosmetic-container-generative-ai_865659-7416.jpg';

const Main = ({setSelectedType}) => {
  const navigate = useNavigate();

  const handleTypeClick = (type) => {
    setSelectedType(type);
    navigate(`/products?type=${type}`);
  };

  return (
    <div className='productTypes'>
      <div className='type' onClick={() => handleTypeClick('makeup')}>
        <img loading="lazy" src={makeUp} alt='makeUp' />
        <div className='top'>MAKEUP<br />PRODUCTS</div>
      </div>
      <div className='type' onClick={() => handleTypeClick('specialones')}>
        <img loading="lazy" src={special} alt='special' />
        <div className='top'>SPECIAL<br />PRODUCTS</div>
      </div>
      <div className='type' onClick={() => handleTypeClick('trendingones')}>
        <img loading="lazy" src={trending} alt='trending' />
        <div className='top'>TRENDING<br />PRODUCTS</div>
      </div>
      <div className='type' onClick={() => handleTypeClick('new')}>
        <img loading="lazy" src={latest} alt='latest' />
        <div className='top'>LATEST<br />PRODUCTS</div>
      </div>
    </div>
  );
};

export default Main;
