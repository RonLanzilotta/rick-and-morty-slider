import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { deleteCharacter } from '../services/characters.js'

export default function Navbar() {

    // let { id } = useParams()
    // let navigate = useNavigate();

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
                <NavLink to="/characters/:id">Update Character</NavLink>
                {/* <button onClick={handleDelete}>Delete Character</button> */}
            </nav>
        </header>
    )
}