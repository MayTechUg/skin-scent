import React, { useState, useEffect } from 'react';

const AddItem = ({ addItem, editingItem, updateItem }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [collection, setCollection] = useState('');
  const [description, setDescription] = useState('');
  const [howToUse, setHowToUse] = useState('');
  const [priceTwo, setPriceTwo] = useState('');
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingItem) {
      setText(editingItem.text);
      setImage(editingItem.image);
      setPrice(editingItem.price);
      setType(editingItem.type);
      setCategory(editingItem.category);
      setCollection(editingItem.collection);
      setId(editingItem.id);
      setDescription(editingItem.description);
      setHowToUse(editingItem.howToUse);
      setPriceTwo(editingItem.priceTwo);
    }
  }, [editingItem]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('file', image);
    formData.append('text', text);
    formData.append('price', price);
    formData.append('type', type);
    formData.append('category', category);
    formData.append('collection', collection);
    formData.append('description', description);
    formData.append('howToUse', howToUse);
    formData.append('priceTwo', priceTwo);

    try {
      const response = await fetch('http://localhost:5001/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      alert('Item successfully uploaded!');
      // Optionally, you can call addItem or updateItem here
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to upload the item. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <form className='dashboard' onSubmit={handleSubmit}>
      <div className='dashName'>
        <label htmlFor='text'>Product Name</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter the product name"
          required
        />

        <label htmlFor='option'>Where is the product applied</label>
        <div className='dashRadio'>
          <label className='radioLabel'>
            <input
              type="radio"
              value="lips"
              checked={collection === 'lips'}
              onChange={(e) => setCollection(e.target.value)}
            />
            <span>Lips</span>
          </label>
          <label className='radioLabel'>
            <input
              type="radio"
              value="eyes"
              checked={collection === 'eyes'}
              onChange={(e) => setCollection(e.target.value)}
            />
            <span>Eyes</span>
          </label>
          <label className='radioLabel'>
            <input
              type="radio"
              value="face"
              checked={collection === 'face'}
              onChange={(e) => setCollection(e.target.value)}
            />
            <span>Face</span>
          </label>
          <label className='radioLabel'>
            <input
              type="radio"
              value="skin"
              checked={collection === 'skin'}
              onChange={(e) => setCollection(e.target.value)}
            />
            <span>Skin</span>
          </label>
        </div>

        <label htmlFor='number'>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Ushs 0.00"
          required
        />
        <label htmlFor='number'>Shipping Price</label>
        <input
          type="number"
          value={priceTwo}
          onChange={(e) => setPriceTwo(e.target.value)}
          placeholder="Enter Shipping price"
        />
      </div>
      <div className='dashImage'>
        <label htmlFor='file'>Add product image</label>
        <input type="file" onChange={handleImageChange} />

        <label htmlFor='select'>Choose Category</label>
        <select className='dashSelect' value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Choose category here</option>
          <option value="featured">Featured</option>
          <option value="latest">Latest</option>
          <option value="special">Special</option>
          <option value="trending">Trending</option>
        </select>

        <label htmlFor='types'>Choose Product Type</label>
        <select className='dashSelect' value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Choose product type here</option>
          <option value="new">New</option>
          <option value="specialones">Special Ones</option>
          <option value="makeup">Make Up</option>
          <option value="trendingones">Trending Ones</option>
        </select>

        <label htmlFor='description'>Product Description</label>
        <textarea
          className='dashSelect'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description about the product"
          required
        />
        <label htmlFor='howtouse'>How to use the product</label>
        <textarea
          className='dashSelect'
          value={howToUse}
          onChange={(e) => setHowToUse(e.target.value)}
          placeholder="Describe how the product is used"
          required
        />
        <button className='submit' type="submit" disabled={loading}>
          {loading ? 'Uploading' : id ? 'Update' : 'Add'} Product
        </button>
      </div>
    </form>
  );
};

export default AddItem;
