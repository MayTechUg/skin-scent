import React from 'react';

const ItemPage = ({item, deleteItem, loading}) => {

  

  return (
    <div className='dashDisplay'  key={item.id}>
        {item.image && <img src={item.image} alt="uploaded" width="100" />}
        <p>{item.text}</p>
        <p>Shs {item.price}</p>
        <div className='dashButtons'>
            <button onClick={() => deleteItem(item.id)}  disabled={loading}>{loading ? 'Deleting' : 'Delete'} item</button>
        </div>
    </div>
  )
}

export default ItemPage