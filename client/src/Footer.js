import React from 'react';
import './index.css';



const Footer = () => {
    const today = new Date();

  return (
    <footer className='App-footer'>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer

