import React from 'react';
import ItemList from './ItemList';



const Content = ({ items, handleChange, handleDelete }) => {

  return (
    <main className='App-content'>

      {(items.length) ? (
        <ItemList
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : (
        <p>The list is empty!!!</p>
      )
      }

    </main >
  )
}

export default Content

