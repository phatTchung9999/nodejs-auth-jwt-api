import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('shoppinglist');
    return savedItems ? JSON.parse(savedItems) :
      ([{
        id: 1,
        checked: false,
        item: "Employee 1"
      },
      {
        id: 2,
        checked: false,
        item: "Employee 2"
      }])
  });

  const [newItem, setNewItem] = useState('');

  const handleChange = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const clearStorage = () => {
    localStorage.removeItem('shoppinglist');
    console.log('The localStorage is cleared');
  }
  return (
    <div className='App'>
      <Header
        title="HRmanager"
        clearStorage={clearStorage}
      />
      <AddItem
      />
      <Content
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
