import React from 'react'
import { useNavigate } from 'react-router-dom';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../style/productsPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TermsHeader = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }
  
  return (
    <div className='headerDesign'>
      <FontAwesomeIcon onClick={handleGoBack} icon={faCircleArrowLeft}/>
      <span>Skin & Scent</span>
    </div>
  )
}

export default TermsHeader