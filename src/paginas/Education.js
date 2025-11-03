import React from 'react';
import { Link } from 'react-router-dom';
import './Education.css';
import Media from './imagenes/Media.jpg';
import Quiroz from './imagenes/quiroz.jpg';
import Ecocycle from './imagenes/ecocycle.jpg';
import Leer from './imagenes/leer.jpg';

function Education() {
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
                <li className="nav-item1">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item2">
                  <Link className="nav-link" to="/education">Educación</Link>
                </li>
                <li className="nav-item3">
                  <Link className="nav-link" to="/projects">Proyectos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className='body'>
        <div className='backround'>
          <div className='edu'>
            <h2>EDUCATION</h2>
          </div>
          <div className='titulo1'>
            <h4>¡Supérate!</h4>
          </div>
          <img className='sup' src={Media} alt="Mi imagen" />
          <div className='año1'>
            <p>2023 - 2025</p>
          </div>
          <div className='texto'>
            <p>
              I studied in the ¡Supérate! business program for three years, where I developed skills such as leadership, discipline, teamwork, communication, programming, and my second language, English.
            </p>
          </div>
          <div className='titulo2'>
            <h4>Complejo Educativo "Sor Clara Quiroz"</h4>
          </div>
          <img className='inst' src={Quiroz} alt="quiroz" />
          <div className='año2'>
            <p>2024 - 2025</p>
            <div className='texto11'>
              <p>I completed my General High School Diploma at Complejo Educativo Sor Clara Quiroz, where I expanded my knowledge by participating in math contests and reading and science fairs, and also developed my leadership skills to the fullest.</p>
            </div>
            <div className='experience'>
              <h2>EXPERIENCE</h2>
            </div>
            <div className='volunteering'>
              <h3>volunteering</h3>
            </div>
            <img className='eco' src={Ecocycle} alt="Mi imagen" />
            <div className='ecooo'>
              <h4>Ecocycle</h4>
            </div>
            <div className='añoeco'>
              <p>2024</p>
            </div>
            <div className='textoeco'>
              <p>I volunteered in the Ecocycle project as a tutor and crafts coordinator, always emphasizing the three R’s and the importance of being kind to the environment.</p>
            </div>
            <img className='leers' src={Leer} alt="Mi imagen" />
            <div className='lps'>
              <h4>Leer Para Soñar</h4>
            </div>
            <div className='añolps'>
              <p>2023</p>
            </div>
            <div className='textolps'>
              <p>I took part in the Leer Para Soñar project, where I learned that I can achieve anything I want if I try hard, without being afraid of failure or the problems that may appear, and that every person is valuable.</p>
            </div>
          </div>
                      <div className='footere'>
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
        </div>
      </div>

    </>
  );
}

export default Education;
