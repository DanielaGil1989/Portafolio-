import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  return (
    <>
    <div className='navbar_Color'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
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
      </div>

      <div className='boddy'>
        <div className='fondoo'>
          <div className='pro'>
            <h2>PROJECTS</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

 