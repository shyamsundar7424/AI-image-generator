import React, { useState } from 'react';
import './App.css';
import TextToImageGenerator from './components/TextToImageGenerator';
import '@fontsource/poppins';

function App() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); 
  };

  return (
    <>
      <nav className='navs'>
        <a href="index.html"  className='nav-link'>

          <svg
            id="logo-16"
            width="109"
            height="43"
            viewBox="0 0 109 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z"
              className="ccompli1"
              fill="#FFD200"></path>
            <path
              d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z"
              className="ccompli2"
              fill="#06E07F"></path>
            <path
              d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z"
              className="ccustom"
              fill="#E3073C"></path>
            <path
              d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z"
              className="ccustom"
              fill="#1F84EF"></path>
          </svg>
        </a>

        <div id='navbars'>
          <h1 id='logotext'>Image World</h1>
          <ul className='listname'
           style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            gap:'30px',
           }}
          >
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="login.html">AI Text to voice</a></li>
          </ul>
        </div>
        <div>
          <ul
            id="navbar"
            
            style={{
              display: clicked ? 'flex' : 'none', 
              flexDirection: 'column',
              position: 'fixed',
              top: '90px',
              right: clicked ? '0px' : '-300px', 
              width: '300px',
              height: '100vh',
              background: '#1b2430',
              boxShadow: '0px 40px 60px rgba(0,0,0,0.06)',
              padding: '40px 10px',
              transition: 'right 0.3s ease-in-out',
            }}>
            <button onClick={handleClick} style={{ marginBottom: '20px', background: 'none',
               border: 'none', color: 'white', fontSize: '24px' }}>
              &times; 
            </button>
            <li><a className="active" href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="login.html">AI Text to voice</a></li>
          </ul>
        </div>

        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
      <div className="App">
        <main className="p-4">
          <TextToImageGenerator />
        </main>
        <footer className="bg-gray-800 p-4 text-white text-center relative w-full top-[22rem]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <p>&copy; 2024 Tech Image Generator. All rights reserved.</p>
          <p>Website by AI Image Generator.</p>
          <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
        </footer>
      </div>
    </>
  );
}

export default App;
