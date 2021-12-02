import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';
import Back from '../../images/back-button.svg';


export const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={Back} alt="teste" style={{ width: '50px' }} />
        </Link>
      </div>
    </header>

  )
}