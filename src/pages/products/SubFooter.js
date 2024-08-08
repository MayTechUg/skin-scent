import React from 'react'
import { Link } from 'react-router-dom'
import { faXTwitter, faPinterest, faWhatsapp, faTiktok,faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../style/productsPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SubFooter = () => {

        const phoneNumber = "0788975743"; 
        const message = "Hello! I'm interested in your products."; 
    
  return (
    <section className='subFooter'>
        <div className='diffuser'></div>
        <h5>&copy; SkinandScent256</h5>
        <span className='socialHandles'>
            <FontAwesomeIcon icon={faXTwitter}/>
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}>
                <FontAwesomeIcon icon={faWhatsapp}/>
            </a>
            <a href="https://www.tiktok.com/@ondeen51" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok}/>
            </a>
            <a href="https://www.instagram.com/skinandscent256" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <FontAwesomeIcon icon={faPinterest}/>
        </span>
        <span className='linkContainer'>
            <Link className='links'>
                Info
            </Link>
            <Link className='links' to='/terms'>
                Terms Of Service
            </Link>
            <Link className='links' to='/refund'>
                Refund Policy
            </Link>
            <Link className='links' to='/about'>
                About us
            </Link>
        </span>
        <p>Follow our handles or <Link to='/crud'>contact</Link> us at +256742588767</p>        
    </section>
  )
}

export default SubFooter