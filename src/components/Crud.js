import { useState, useEffect } from "react";
import React from 'react';
import AddItem from "../extensions/AddItem";
import DisplayItems from "../utilities/DisplayItems";

const Crud = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('https://skin-scent-server.onrender.com/list');
      const data = await response.json();
      console.log('Fetched items:', data); // Debugging statement
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const addItem = async (item) => {
    try {
      await fetch('https://skin-scent-server.onrender.com/upload', {
        method: 'POST',
        body: item, // Ensure this is in the correct format
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      fetchItems(); // Refresh the list after adding
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const updateItem = async (updatedItem) => {
    try {
      await fetch('http://localhost:5001/update', {
        method: 'POST',
        body: JSON.stringify(updatedItem),
        headers: { 'Content-Type': 'application/json' }
      });
      fetchItems(); // Refresh the list after updating
      setEditingItem(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const deleteItem = async (id) => {
    setLoading(true);
    try {
      await fetch('http://localhost:5001/delete', {
        method: 'POST',
        body: JSON.stringify({ fileId: id }),
        headers: { 'Content-Type': 'application/json' }
      });
      fetchItems(); // Refresh the list after deleting
    } catch (error) {
      console.error('Error deleting item:', error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="crud">
      <h3>Admin dashboard</h3>
      <AddItem addItem={addItem} editingItem={editingItem} updateItem={updateItem} />
      <DisplayItems items={items} setEditingItem={setEditingItem} deleteItem={deleteItem} />
    </div>
  );
};

export default Crud;
