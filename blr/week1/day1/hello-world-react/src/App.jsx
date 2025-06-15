import React from 'react';
import './App.css';

function App() {
  const name = "Vinit Sureka";
  const currentYear = new Date().getFullYear();

  const hobbies = ['Playing Cricket','Listing Music'];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to {name}'s Profile</h1>
        <p className="welcome-message">All About Myself</p>
      </header>

      <section className="profile-section">
        <h2>About Me</h2>
        <p>Hi, I'm {name}. I'm a passionate developer with a background in computer science and a love for solving real-world problems through code.</p>
        <p style={{ fontStyle: 'italic' }}>Today's Date: {new Date().toLocaleDateString()}</p>
      </section>

      <section className="hobbies-section">
        <h2>My Hobbies & Interests</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </section>

      <section className="quote-section">
        <h2>Motivational Quote</h2>
        <p>"Strive not to be a success, but rather to be of value." - Albert Einstein</p>
      </section>

      <footer className="footer">
        <p>&copy; {currentYear} {name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;