import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { deleteCharacter, getCharacters } from '../services/characters.js'

export default function Navbar() {

    // async function handleDelete() {
    //     await deleteCharacter(id)
    //     navigate("/", { replace: true })
    //     alert("Character Deleted!")

    // }

    return (
        <header>
            <h1 className="title">RickDex</h1>
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/add-character">Create Character</NavLink>
            </nav>
        </header>
    )
}