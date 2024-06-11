import React from 'react'
import { Link } from 'react-router-dom';

// Styles imports
import '../Styles/Button.css';
import '../Styles/tokens.css';

// img imports

export const Button = ({ icon }) => {
  return (
    <div>
      <button className='main_button'>
        <img src={icon} alt="Botón" />
      </button>
    </div>
  )
}

export default Button;