
import React from 'react';
import ItemPage from './ItemPage';

const DisplayItems = ({ items,setEditingItem, deleteItem}) => {

  return (
    <div className='dashContainer'>
      {items.map(item => (
        <ItemPage
          key={item.id}
          items={items}
          item={item}
          setEditingItem={setEditingItem}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default DisplayItems;
