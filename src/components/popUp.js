import React from 'react';
import '../pages/style/footer.css';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Popup = ({ isOpen, onClose }) => {

  const phoneNumber = "0788975743"; 
  const message = "Hello! I'm interested in your products."; 
  
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <button onClick={onClose} className="close-btn">Close</button>
        <div className='call'>
            <p>Order Via Direct Call</p>
            <a href='tel:+256742588767'><FontAwesomeIcon icon={faPhoneAlt}/><span> 0742588767</span></a>
            <a href='tel:+256788975743'><FontAwesomeIcon icon={faPhoneAlt}/><span> 0788975743</span></a>
        </div>
        <div className='call'>
            <p>Order Via WhatsApp</p>
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}>
            <FontAwesomeIcon icon={faWhatsapp} className='whatsapp'/><span> +911265890076</span>
            </a>
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}>
            <FontAwesomeIcon icon={faWhatsapp} className='whatsapp'/><span> +256788975743</span>
            </a>
        </div>
        <div className='socialMedia'>
            <p>Visit Our Social Media Handles</p>
            <p>Skin&Scent</p>
            <p>
            <a href="https://www.instagram.com/skinandscent256" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='insta'/>
            </a>
            <a href="https://www.tiktok.com/@ondeen51" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className='tikTok'/>
            </a>
            <a href="https://www.facebook.com/@ondeen51" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className='faceBook'/>
            </a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
