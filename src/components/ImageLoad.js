import React, { useState } from 'react';
import '../pages/style/ImageLoading.css'; 

const ImageWithLoading = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="image-container">
      {loading && 
        <div class="loader">
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
        </div>}
      <img 
        src={src} 
        alt={alt} 
        onLoad={() => setLoading(false)} 
        onError={() => setLoading(false)} 
        style={{ display: loading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default ImageWithLoading;
