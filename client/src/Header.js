import React from 'react'


const Header = ({ title, clearStorage }) => {

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
              fontSize: '1.4rem',
              cursor: 'pointer',
            }
          }>
          <b>{title}</b>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href='#' style={{ textDecoration: 'none', color: 'black' }}>Log In</a>
        </div>
      </nav>

    </header>
  )
}

export default Header

