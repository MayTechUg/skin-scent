import React from 'react'
import {Link} from 'react-router-dom'
import '../style/footer.css'

import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons/faLightbulb'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentMedical } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Popup from '../../components/popUp'

const Footer = () => {

  const[isPopupOpen,setIsPopupOpen] = useState(false)

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen)
  }

  return (
    <div className='footer'>
      <div className='footerLink'>
        <Link to="/">
          <FontAwesomeIcon className='icons' icon={faHome}/>
        </Link>
        <p>Home</p>
      </div>
      <div className='footerLink'>
        <Link to="/tips">
          <FontAwesomeIcon className='icons' icon={faLightbulb}/>
        </Link>
        <p>Tips</p>
      </div>
      <div className='footerLink'>
        <Link to="/products">
          <FontAwesomeIcon className='icons' icon={faBagShopping}/>
        </Link>
        <p>All Products</p>
      </div>
      <div className='footerLink'>
          <FontAwesomeIcon onClick={togglePopup} className='footer-btn' icon={faMessage}/>
        <p>Contact</p>
        <Popup isOpen={isPopupOpen} onClose={togglePopup}/>
      </div>
    </div>
  )
}

export default Footer