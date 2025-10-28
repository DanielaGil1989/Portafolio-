import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
    <div className='navbar_Color'></div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Mi Portafolio</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education">Educación</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Proyectos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="boddy">
        <div className="home-background">
        <h1>DANIELA GIL</h1>
        </div>
        </div>
    </>
  );
}

export default Home;
