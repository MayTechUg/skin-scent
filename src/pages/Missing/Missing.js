import React from 'react'
import {Link} from 'react-router-dom';
import '../style/missing.css'

const Missing = () => {
  return (
    <>
      <section className='missing'>
        <div className='whiteFade'></div>
        <article className='texts'>
        <p className='hi'>Hi...</p>
        <p className='welcome'>welcome</p>
        <p className='to'>to</p>
        <p className='skin'>Skin and Scent</p>
        </article>
        <article className='navigation-buttons'>
          <button>
            <Link to='/'>
             Visit our Homepage
            </Link>
          </button>
          <button>
            <Link to='/products'>
               Checkout our Products
            </Link>
          </button>
        </article>
      </section>
    </>
  )
}

export default Missing 
