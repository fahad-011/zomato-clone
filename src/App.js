import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />

      <section className="hero__section">
        <header>
          <nav className="navbar">
            <a href="#">Get the App</a>
            <div className="navbar__menu_container">
              <a href="#" className="link">
                Inventor Relations
              </a>
              <a href="#" className="link">
                Add Restaurants
              </a>
              <a href="#" className="link">
                Login
              </a>
              <a href="#" className="link">
                Sign-Up
              </a>
              <a href="#" className="user__icon">
                <i className="fa-solid fa-user"></i>
              </a>
            </div>
                h1 
          </nav>
        </header>
      </section>
    </div>
  );
}

export default App;
