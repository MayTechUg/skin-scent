import React from 'react'
import { useNavigate } from 'react-router-dom'
import redLips from '../../assets/images/beautiful-plump-red-lips-black-woman-snowwhite-teeth_729147-1755.jpg'
import face from '../../assets/images/female-eye-makeup-beautiful-colorful-magical-fantasy-pretty-female-eye_499485-488.jpg'
import eyes from '../../assets/images/woman-with-golden-eyes-golden-makeup_759095-30245.jpg'
import woman from '../../assets/images/woman-with-hairdo-that-has-purple-background-with-white-dots_987694-6968.jpg'

const NavSpace = ({setSelectedCollection}) => {

  const navigate = useNavigate();

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection);
    navigate(`/products?collection=${collection}`);
  };
 
  return (
    <section className='navSpace'>
      <h5>SHOP BY COLLECTION</h5>
      <div className='slides'>
      <div className='slide' onClick={()=>handleCollectionClick('eyes')}>
          <img  loading="lazy" src={face} alt='eyes'/>
          <div className='onTop'>EYES</div>
        </div>
        <div className='slide' onClick={()=>handleCollectionClick('lips')}>
          <img  loading="lazy" src={redLips} alt='lips'/>
          <div className='onTop'>LIPS</div>
        </div>
        <div className='slide' onClick={()=>handleCollectionClick('face')}>
          <img  loading="lazy" src={woman} alt='Face'/>
          <div className='onTop'>FACE</div>
        </div>
        <div className='slide' onClick={()=>handleCollectionClick('skin')}>
          <img  loading="lazy" src={eyes} alt='skin'/>
          <div className='onTop'>SKIN</div>
        </div>
      </div>
    </section>
  )
}

export default NavSpace