import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './Header';
import { Footer } from './Footer';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Menu" element={<Menu />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
