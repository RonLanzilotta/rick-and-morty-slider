import { NavLink } from 'react-router-dom'

export default function Navbar() {

    return (

        <header>

            <NavLink to="/"><button className="navButtonHome">Home</button></NavLink>

            <h1 className="title">rickdex</h1>

            <NavLink to="/add-character"><button className="navButtonCreate">Create Character</button></NavLink>

        </header>
    )
}