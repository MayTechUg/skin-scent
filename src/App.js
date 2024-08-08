import About from './pages/Info/About';
import Refund from './pages/Info/Refund';
import Terms from './pages/Info/Terms';
import Tips from "./pages/Tips/Tips";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./pages/Foooter/Footer";
import Missing from "./pages/Missing/Missing";
import Product from "./pages/products/Product";
import ProductsPage from "./extensions/ProductsPage";
import DisplayItems from "./utilities/DisplayItems";
import Crud from "./components/Crud";
import {Routes, Route } from 'react-router-dom';
import { useState,useEffect } from "react";
import ItemPage from "./utilities/ItemPage";
import Loading from './components/Loading.js';
import axios from 'axios';

function App() {

  // Screensize-Height 
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://skin-scent-server.onrender.com/list');
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
        <Routes>
          <Route  path="/" element= {<HomePage
          setSelectedCategory={setSelectedCategory}
          setSelectedCollection={setSelectedCollection}
          setSelectedType={setSelectedType}
          />}/>
          <Route  path="/tips" element= {<Tips/>}/>
          <Route  path="/products" element={<ProductsPage
          items={items}/>}/>
          <Route  path="/product/:id" element={<Product
          items={items}
          setItems={setItems}
          loading={loading}/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="*" element={<Missing/>}/>
          <Route  path="/crud" element={<Crud 
          items={items}
          setItems={setItems}
          editingItem={editingItem}
          setEditingItem={setEditingItem}/>}/>
          <Route  path="/item" element={<DisplayItems/>}/>
          <Route  path="/item/:id" element={<ItemPage/>}/>
          <Route  path="/refund" element={<Refund/>}/>
          <Route  path="/terms" element={<Terms/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
