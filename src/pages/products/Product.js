import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import SubFooter from './SubFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhoneAlt, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ImageWithLoading from '../../components/ImageLoad';
import Loading from '../../components/Loading'

const Product = ({ items }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const item = items.find(item => item.id === id);

    if (!item) {
        return <Loading/>;
    }

    const handleGoBack = () => {
        navigate(-1);
    }

    const phoneNumber = "0788975743";
    const message = "Hello! I'm interested in your products.";

    return (
        <section className='singleProduct'>
            <div className='h2'>
                <FontAwesomeIcon onClick={handleGoBack} icon={faCircleArrowLeft} />
                <h2>{item.text}</h2>
            </div>
            <div className='mainProduct'>
                {item.image && <ImageWithLoading loading="lazy" src={item.image} alt="uploaded" width="100" />}
            </div>
            <div className='orderOptions'>
                <div className='priceDetails'>
                    <p>Price: Shs.{item.price}</p>
                    <p>Shipping Price: Shs.{item.price}</p>
                </div>
                <a href={`tel:+256742588767`}>
                    <button><FontAwesomeIcon icon={faPhoneAlt} /> Call for an Order</button>
                </a>
                <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}>
                    <div className='call-button'><FontAwesomeIcon icon={faWhatsapp} />Start Chat for an Order</div>
                </a>
            </div>
            <section className='Description'>
                <h4>How To Use</h4>
                <div className='descriptionDetails'>
                    <p>{item.howToUse}</p>
                </div>
            </section>
            <section className='Description'>
                <h4>Product Details</h4>
                <div className='descriptionDetails'>
                    <p>{item.description}</p>
                </div>
            </section>
            <SubFooter />
        </section>
    );
};

Product.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            image: PropTypes.string,
            price: PropTypes.string.isRequired,
            howToUse: PropTypes.string,
            description: PropTypes.string,
            priceTwo: PropTypes.string,
        })
    ).isRequired,
};

export default Product;
