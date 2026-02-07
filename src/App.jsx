// src/App.jsx
import { useState } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Hero from './components/sections/Hero';
import Customers from './components/sections/Customers';
import AboutUs from './components/sections/AboutUs';
import PlanAndManage from './components/sections/PlanAndManage';
import CustomerHelp from './components/sections/CustomerHelp';

function App() {
  return (
    <>
      <div className="layout">
        <Header />
        <section id="hero">
          <Hero />
        </section>
        <section id="customers">
          <Customers />
        </section>
      </div>
      <main>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="plan-and-manage">
          <PlanAndManage />
        </section>
        <section id="customer-help">
          <CustomerHelp />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
