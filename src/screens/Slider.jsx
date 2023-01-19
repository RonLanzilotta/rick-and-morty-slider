import { useState, useEffect } from "react";
import { deleteCharacter, getCharacters } from "../services/characters.js";
import { Link } from "react-router-dom";

export default function Slider() {
  const [characters, setCharacters] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    const allCharacters = await getCharacters();
    setCharacters(allCharacters);
  }

  function incrementCharacter() {
    if (index === characters.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }

  function decrementCharacter() {
    if (index === 0) {
      setIndex(characters.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  }

  async function handleDelete() {
    await deleteCharacter(characters[index]._id);
    window.location.reload();
    alert("Character Deleted!");
  }

  if (characters.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="slider">

      <button className="left" onClick={decrementCharacter}>&lt;</button>

      <div className="characterField">

        <img className="characterImage" src={characters[index].image}></img>

        <ul className="characterDetails">
          <li><span>Name: </span>{characters[index].name}</li>
          <li><span>Species: </span>{characters[index].species}</li>
          <li><span>Gender: </span>{characters[index].gender}</li>
          <li><span>Status: </span>{characters[index].status}</li>
        </ul>

        <div className="button-container">

          <Link to={`/characters/${characters[index]._id}/update`}>
            <button>EDIT</button>
          </Link>

          <button onClick={handleDelete}>DELETE</button>

        </div>

      </div>

      <button className="right" onClick={incrementCharacter}>&gt;</button>

    </div>
  );
}
