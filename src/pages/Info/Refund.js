import React from 'react'
import '../style/productsPage.css'
import RefundTerms from './RefundTerms'
import TermsHeader from './TermsHeader'
import SubFooter from '../products/SubFooter'

const Refund = () => {
  return (
    <article className='refundPolicy'>
        <TermsHeader/>
        <RefundTerms/>
        <SubFooter/>
    </article>
  )
}

export default Refund