// src/App.jsx
import { useState } from 'react';
import './App.css';
import Header from './components/layouts/Header';
// import Footer from './components/layouts/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className="container">React - Productivity</h1>

        <section>
          <div className="container"></div>
        </section>

        <section>
          <div className="container"></div>
        </section>

        <section>
          <div className="container"></div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
