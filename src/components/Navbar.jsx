import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <h1 className="title">RickDex</h1>
            <nav className="navbar">
                <Link to="/">Edit Character</Link>
                <Link to="/">Create Character</Link>
                <Link to="/">Delete Character</Link>
            </nav>
        </header>
    )
    // need to update endpoints
}