import { useState, useEffect } from 'react';
import Heading from './Heading'
import Slider from './Slider'
import './App.css';


export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = () => {
    fetch(`https://project2-production-7023.up.railway.app/characters`)
      .then((res) => res.json())
      .then((data) => setCharacters(data))
  }

  return (
    <main className="page">
        <Heading className="heading"/>
        <Slider character={characters} className="slider"/>
    </main>
  );
}

