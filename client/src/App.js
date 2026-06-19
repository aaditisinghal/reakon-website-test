import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeProvide from './components/WhatWeProvide';
import CustomerSuccess from './components/CustomerSuccess';
import ComparisonTable from './components/ComparisonTable';
import WhyChoose from './components/WhyChoose';
import FreeTrial from './components/FreeTrial';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhatWeProvide />
      <CustomerSuccess />
      <ComparisonTable />
      <WhyChoose />
      <FreeTrial />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
