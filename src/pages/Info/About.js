import React from 'react'
import '../style/productsPage.css'
import AboutStore from './AboutStore'
import TermsHeader from './TermsHeader'
import SubFooter from '../products/SubFooter'

const About = () => {
  return (
    <article className='Aboutpage'>
        <TermsHeader/>
        <AboutStore/>
        <SubFooter/>
    </article>
  )
}

export default About