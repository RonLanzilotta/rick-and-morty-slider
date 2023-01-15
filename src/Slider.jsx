import { useState, useEffect } from 'react'

export default function Slider() {

    const [characters, setCharacters] = useState([]);
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetchCharacters();
      }, []);
    
      const fetchCharacters = () => {
        fetch(`https://project2-production-7023.up.railway.app/characters`)
          .then((res) => res.json())
          .then((data) => setCharacters(data))
      }

    function incrementCharacter() {
        if ( index === 19 ) {
            setIndex(0);

        } else {
            setIndex((prev) => prev + 1)
            console.log(index)
        }}

    function decrementCharacter() {
        if ( index === 0 ) {
            setIndex(19)

        } else {
            setIndex((prev) => prev - 1)
        }}
    
    if (characters.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="slider">
        <button className="left" onClick={decrementCharacter}>&lt;</button>
        <div className="characterField">
            <img className="characterImage" src={characters[index].image}></img>
            <ul>
                <li className="listItem">{characters[index].name}</li>
                <li className="listItem">{characters[index].species}</li>
                <li className="listItem">{characters[index].gender}</li>
                <li className="listItem">{characters[index].status}</li>
            </ul>
        </div>
        <button className="right" onClick={incrementCharacter}>&gt;</button>
    </div>
  );
}
