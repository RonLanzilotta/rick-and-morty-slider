import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Slider from './Slider'
import './App.css';


export default function App() {

  return (

<div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Slider />}></Route>
      </Routes>
    </div>
  );
}

