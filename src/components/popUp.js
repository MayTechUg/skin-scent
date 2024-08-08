import React from 'react';
import '../pages/style/footer.css';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Popup = ({ isOpen, onClose }) => {

  const phoneNumber = "+256706547916"; 
  const phoneNumberTwo = "+971582733937"; 
  const message = "Hello! I'm interested in your products."; 
  
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <button onClick={onClose} className="close-btn">Close</button>
        <div className='call'>
            <p>Order Via Direct Call</p>
            <a href='tel:+256706547916'><FontAwesomeIcon icon={faPhoneAlt}/><span> +256706547916</span></a>
            <a href='tel:+971582733937'><FontAwesomeIcon icon={faPhoneAlt}/><span> +971582733937</span></a>
        </div>
        <div className='call'>
            <p>Order Via WhatsApp</p>
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}>
            <FontAwesomeIcon icon={faWhatsapp} className='whatsapp'/><span> +256706547916</span>
            </a>
            <a href={`https://wa.me/${phoneNumberTwo}?text=${encodeURIComponent(message)}`}>
            <FontAwesomeIcon icon={faWhatsapp} className='whatsapp'/><span>+971582733937</span>
            </a>
        </div>
        <div className='socialMedia'>
            <p>Visit Our Social Media Handles</p>
            <p>Skin&Scent</p>
            <p>
            <a href="https://www.instagram.com/skinandscent256" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='insta'/>
            </a>
            <a href="https://www.tiktok.com/@skinandscent256" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className='tikTok'/>
            </a>
            <a href="https://www.facebook.com/@skinandscent256" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className='faceBook'/>
            </a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
