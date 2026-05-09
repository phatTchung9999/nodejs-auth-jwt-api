import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './index.css';


const Content = () => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('shoppinglist');
    return savedItems ? JSON.parse(savedItems) : 
        ([{
          id: 1,
          checked: false,
          item: "One half pound bag of Cocoa Covered ALmonds Unsalted"
        },
        {
          id: 2,
          checked: false,
          item: "Item 2"
        }])
  });


  const handleChange = (id) => {
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }


  return (
    <main className='App-content'>

      { (items.length !== 0) ? ( 
        <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input 
              type="checkbox" 
              checked={item.checked} 
              onChange={() => handleChange(item.id)} 
            />
            <label style={(item.checked) ? {textDecoration : 'line-through'}: null}>
              {item.item}
            </label>
            <FaTrashAlt 
              role="button"
              tabIndex="0"
              onDoubleClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
      ) : (
        <p>The list is empty!!!</p>
      )
    }

    </main>
  )
}

export default Content

