import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageWithLoading from '../../components/ImageLoad';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Products = ({ category }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      console.log('Scrolling left');
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust this value as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      console.log('Scrolling right');
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust this value as needed
        behavior: 'smooth',
      });
    }
  };

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://skin-scent-server.onrender.com/list');
        const allItems = response.data;
        const filteredItems = allItems.filter(item => item.category === category);
        setItems(filteredItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <div className="loading-container">
        <div class="loader" loading={loading}>
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
        </div>
</div>;
  }

  return (
    <div className='productsPage'>
      <div className='product'>
        <button className="scroll-button left" onClick={scrollLeft}>&#9664;</button>
        <div className='productImageContainer' ref={scrollContainerRef}>
          {items.map((item, index) => (
            <div className='productView' key={index}>
              <Link to={`/product/${item.id}`}>
                <ImageWithLoading loading="lazy" src={item.image} alt={item.text} />
                <h3>{item.text}</h3>
                <p>shs {item.price}</p>
              </Link>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&#9654;</button>
      </div>
    </div>
  );
};

export default Products;
