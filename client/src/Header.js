import React from 'react'
import SearchItem from './SearchItem'


const Header = ({ title, clearStorage, search, setSearch }) => {

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
        <div>
          <SearchItem
            search={search}
            setSearch={setSearch}
          />
        </div>
      </nav>

    </header>
  )
}

export default Header

