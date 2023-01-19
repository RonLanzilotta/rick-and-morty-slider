import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateCharacter, getCharacter } from "../services/characters.js";

export default function UpdateCharacter() {

  const [character, setCharacter] = useState({
    name: "",
    species: "",
    gender: "",
    status: "",
    image: "",
  });

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchCharacter();
  }, []);

  async function fetchCharacter() {
    let oneCharacter = await getCharacter(id);
    setCharacter(oneCharacter);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCharacter(id, character);
    navigate(`/characters/${id}`, { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setCharacter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (

    <div>

      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="text"
          type="text"
          placeholder="Name"
          value={character.name}
          name="name"
          onChange={handleChange}
        />
        <input
          className="text"
          type="text"
          placeholder="Species"
          value={character.species}
          name="species"
          onChange={handleChange}
        />
        <input
          className="text"
          type="text"
          placeholder="Gender"
          value={character.gender}
          name="gender"
          onChange={handleChange}
        />
        <input
          className="text"
          type="text"
          placeholder={character.status}
          value={character.status}
          name="status"
          onChange={handleChange}
        />
        <input
          className="text"
          type="text"
          placeholder="img URL"
          value={character.image}
          name="image"
          onChange={handleChange}
        />

        <button type="submit">Update Character</button>

      </form>
      
    </div>
  );
}
