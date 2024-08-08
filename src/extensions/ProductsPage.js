import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../pages/style/productsPage.css';
import ReUsableProduct from './ReusableProduct';
import SearchBar from './SearchBar';
import { ClipLoader } from 'react-spinners';

const ProductsPage = ({ items, loading, setEditingItem, deleteItem, selectedCategory, selectedCollection, selectedType}) => {
    const [searchResults, setSearchResults] = useState([]);
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    const query = useQuery();
    const category = query.get('category') || selectedCategory;
    const collection = query.get('collection') || selectedCollection;
    const type = query.get('type') || selectedType;

    useEffect(() => {
        let filteredItems = items;
        if (category) {
            filteredItems = filteredItems.filter(item => item.category === category);
        }
        if (type) {
            filteredItems = filteredItems.filter(item => item.type === type);
        }
        if (collection) {
            filteredItems = filteredItems.filter(item => item.collection === collection);
        }
        setSearchResults(filteredItems);
    }, [items, category, collection, type]);

    if (loading) {
        return (
            <div className="loading-container">
                <ClipLoader size={50} color={"#123abc"} loading={loading} />
            </div>
        );
    }

    return (
        <div className="productsList">
            <SearchBar data={items} setSearchResults={setSearchResults} />
            <section className="allProducts">
                {searchResults.map(item => (
                    <ReUsableProduct
                        key={item.id}
                        item={item}
                        setEditingItem={setEditingItem}
                        deleteItem={deleteItem}
                    />
                ))}
            </section>
        </div>
    );
};

ProductsPage.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            image: PropTypes.string,
            price: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            collection: PropTypes.string.isRequired,
        })
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    setEditingItem: PropTypes.func,
    deleteItem: PropTypes.func,
    selectedCategory: PropTypes.string,
    selectedCollection: PropTypes.string,
};

export default ProductsPage;
