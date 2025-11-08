import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import IonS from './imagenes/ion.jpg';
import Study from './imagenes/study.jpg';
import Medical from './imagenes/medical.jpg';

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
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/education">Education</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">Projects</Link>
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
          <img className='iooon' src={IonS} alt="imagen" />
          <div className='ions'>
            <h4>IonSpark</h4>
          </div>
          <div className='añoion'>
            <p>2025</p>
          </div>
          <div className='textoion'>
            <p>I was part of the IonSpark project, where I worked as a designer and front-end developer. I learned a lot about the environment and different ways to produce energy in a sustainable way.</p>
          </div>
          <div className='study'>
            <h4>StudyUp!</h4>
          </div>
          <img className='up' src={Study} alt="imagen" />
          <div className='añoup'>
            <p>2024</p>
            <div className='textoup'>
              <p>I participated in Expo 2024, where I was part of the StudyUp! project. In the team, I worked as a designer, front-end developer, and team organizer. I learned about leadership and different ways children can learn.</p>
            </div>
            <img className='med' src={Medical} alt="imagen" />
            <div className='medical'>
              <h4>Medical Care</h4>
            </div>
            <div className='añomed'>
              <p>2023</p>
            </div>
            <div className='textomed'>
              <hp>I was part of the Medical Care project, where I developed my communication and leadership skills. I worked in design and front-end, and I learned a lot about how the medical process works.</hp>
            </div>
          </div>
        </div>
      </div>

      <div className='footermed'>
        <div className='social'>
          <h4>Social</h4>
        </div>
        <div className='media'>
          <h3>media</h3>
        </div>
        <Link className="ig" to="https://www.instagram.com/danniiela.g?igsh=MWNsaXF2c3F4dmExMg==">Instagram</Link>
        <div className='work'>
          <h4>Work</h4>
        </div>
        <div className='media2'>
          <h3>media</h3>
        </div>
        <Link className="gith" to="https://github.com/Danniielag">Git Hub</Link>
        <Link className="linke" to="https://www.linkedin.com/in/daniela-gil-046399365/">Linkedln</Link>
        <div className='personal'>
          <h4>Personal</h4>
        </div>
        <div className='information'>
          <h3>information</h3>
        </div>
        <div className='correo'>
          <h6>daniela.gil07@gmail.com</h6>
        </div>
        <div className='numero'>
          <h6>7107-0127</h6>
        </div>
      </div>

    </>
  );
}

export default Projects;

