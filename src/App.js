import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Slider from './screens/Slider.jsx'
import './App.css';
import CreateCharacter from './screens/CreateCharacter.jsx';
import EditCharacter from './screens/CreateCharacter.jsx'


export default function App() {

  return (

<div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Slider />}/>
        <Route path="/characters" element={<CreateCharacter />}/>
        <Route path="/characters/:id" element={<EditCharacter />}/>
      </Routes>
    </div>
  );
}

