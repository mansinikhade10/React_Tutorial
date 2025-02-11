import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <Hero />
    </div>
  );
}

export default App;