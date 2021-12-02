import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

export const HeaderMain = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>Cruder</h1>
        </div>
        <div className="btn-newPost">
          <Link to="/post">
            <button>Add new Post</button>
          </Link>
        </div>
      </div>
    </header>

  )
}