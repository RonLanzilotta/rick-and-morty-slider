import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createCharacter } from '../services/characters.js'

export default function CharacterCreate() {
  const [character, setCharacter] = useState({
    name: "",
    species: "",
    gender: "",
    status: "",
    image: "",
  })

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createCharacter(character);
    navigate("/", { replace: true });
  }

  const handleChange = (e) => {
    const { value, name } = e.target;

    setCharacter((prev) =>({
      ...prev,
      [name]: value
    })) 
  };

  
  return (
    <div>
      <form className="create-form" onSubmit={handleSubmit}>

          <input className="text"
            type="text"
            placeholder="Name"
            value={character.name}
            name="name"
            onChange={handleChange}
          />
         <input className="text"
            type="text"
            placeholder="Species"
            value={character.species}
            name="species"
            onChange={handleChange}
          />
          <input className="text"
            type="text"
            placeholder="Gender"
            value={character.gender}
            name="gender"
            onChange={handleChange}
          />
          <input className="text"
            type="text"
            placeholder="Status"
            value={character.status}
            name="status"
            onChange={handleChange}
          />
          <input className="text"
            type="text"
            placeholder="img URL"
            value={character.image}
            name="image"
            onChange={handleChange}
          />

          <button type="submit">Create Character</button>
      </form>
    </div>
  )
}