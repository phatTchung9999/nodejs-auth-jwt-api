import React from 'react'
import './index.css'

const Header = () => {

  const clearStorage = () => {
    localStorage.removeItem('shoppinglist');
    console.log('The localStorage is cleared');
  }

  return (
    <header className='App-header'>
        <nav style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '10px 20px'
            }}>
            <div 
            onClick={clearStorage} 
            style={
              {
                fontSize: '1.25rem', 
                cursor: 'pointer'
              }
              }><b>Shopping List</b></div>
            <div style={{display: 'flex', gap: '20px'}}>
                <a href='#' style={{textDecoration: 'none', color: 'black'}}>Log In</a>
            </div>
        </nav>
    </header>
  )
}

export default Header