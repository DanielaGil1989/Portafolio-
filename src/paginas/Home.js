import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
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
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item2">
                    <Link className="nav-link" to="/education">Education</Link>
                  </li>
                  <li className="nav-item3">
                    <Link className="nav-link" to="/projects">Projects</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="boddy">
          <div className="home-background">
            <div className='nombre'>
              <h1>DANIELA GIL</h1>
            </div>
            <div className='carrera'>
              <h1>Marketing Estratégico</h1>
            </div>
            <div className='intro'>
              <h5>HI! THIS IS DANIELA</h5>
            </div>
            <div className='yo'>
              <p>I’m a future Bachelor in Strategic Marketing, passionate about design, logistics, and numbers. I love combining creativity with analysis, always seeking innovative solutions that create value and measurable results.
                I’m deeply interested in campaign planning, brand management, consumer behavior, and process optimization. I enjoy working on projects where I can apply both my strategic thinking and creative side, building ideas that connect with people and drive business growth.</p>
            </div>
            <div className="fondo_abajo">
              <div className='skills'>
                <h4>SKILLS</h4>
              </div>
              <div className='cuadro1'></div>
              <div className='cuadro2'></div>
              <div className='cuadro3'></div>
              <div className='cuadro4'></div>
              <div className='cuadro5'></div>
              <div className='cuadro6'></div>
              <div className='texto1'>
                <h6>creativity</h6>
              </div>
              <div className='texto2'>
                <h6>Analytical thinking</h6>
              </div>
              <div className='texto3'>
                <h6>English</h6>
              </div>
              <div className='texto4'>
                <h6>Developing</h6>
              </div>
              <div className='texto5'>
                <h6>Organization</h6>
              </div>
              <div className='texto6'>
                <h6>Desing</h6>
              </div>
              <div className='footer'>
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
        </div>
      </>
      );
}

      export default Home;
