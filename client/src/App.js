import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

import { useState, useEffect } from 'react';
import { SiEraser } from 'react-icons/si';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 0;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  const handleChange = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
  }

  const clearStorage = () => {
    localStorage.removeItem('shoppinglist');
    setItems([]);
    console.log('The localStorage is cleared');
  }
  return (
    <div className='App'>
      <Header
        title="HRmanager"
        clearStorage={clearStorage}
        search={search}
        setSearch={setSearch}
      />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content

        items={items.filter(item => ((item.item).toLowerCase()).includes(
          search.toLowerCase()
        ))}

        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
