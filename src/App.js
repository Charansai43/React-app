import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to Bussiness Optima</h1>
        <p>This is a basic React app styled to look good with a header and footer.</p>
        <a href="https://businessoptima.com" className="primary-btn" target="_blank" rel="noopener noreferrer">
          Click Here to Learn more
        </a>
  
        </main>
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="App-header">
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="App-footer">
      <p>© {new Date().getFullYear()}Bussiness Optima. All Rights Reserved.</p>
    </footer>
  );
}

export default App;
