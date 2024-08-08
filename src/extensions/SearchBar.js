import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ data, setSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Filter the items based on the query
    const filteredItems = data.filter(item =>
      item.text.toLowerCase().includes(value.toLowerCase())
    );

    // Update the search results in the parent component
    setSearchResults(filteredItems);
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search products...'
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.string,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  setSearchResults: PropTypes.func.isRequired,
};

export default SearchBar;
