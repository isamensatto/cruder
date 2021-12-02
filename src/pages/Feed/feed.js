import React from 'react';
import { HeaderMain } from '../../components/HeaderMain/HeaderMain';
import More from '../../images/more.svg'
import './styles.css';
import { Link } from 'react-router-dom'

export const Feed = () => {
  return (
    <div>
      <HeaderMain />
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Curso consumindo API</h2>
              <img src={More} alt="teste" style={{ width: '50px' }} />
            </header>
            <div className="line">
              <p>
                Oiii eu sou a isaaa
              </p>
            </div>
            <div className="btns">
              <div className="btn-edit">
                <Link to="edit">
                  <button>Editar</button>
                </Link>
              </div>
              <div className="btn-readmore">
                <Link to="ler-mais">
                  <button>Ler mais</button>
                </Link>
              </div>
              <div className="btn-delete">

                <button>Deletar</button>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}