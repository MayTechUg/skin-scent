import React from 'react'
import '../style/productsPage.css'
import TermsAndConditions from './TermsAndConditions'
import SubFooter from '../products/SubFooter'
import TermsHeader from './TermsHeader'

const Terms = () => {
  return (
    <article className='terms'>
        <TermsHeader/>
        <TermsAndConditions/>
        <SubFooter/>
    </article>
  )
}

export default Terms