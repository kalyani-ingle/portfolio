import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default App;
