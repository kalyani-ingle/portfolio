import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter,Routes, Route } from 'react-router-dom'; 
// import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import ContactMe from './components/ContactMe.jsx';
import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';
import PDFViewer from './components/PDFViewer.jsx';

export const AppRouter = () => (
  <HashRouter hashType="hashbang">
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/kalyaniIngle-resume" element={<PDFViewer/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/footer" element={<Footer/>} />
    </Routes>
  </HashRouter>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>
)
