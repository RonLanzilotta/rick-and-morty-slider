import { NavLink } from 'react-router-dom'

export default function Navbar() {

    return (

        <header>

            <NavLink to="/"><button className="navButton">Home</button></NavLink>

            <h1 className="title">RickDex</h1>

            <NavLink to="/add-character"><button className="navButton">Create Character</button></NavLink>

        </header>
    )
}