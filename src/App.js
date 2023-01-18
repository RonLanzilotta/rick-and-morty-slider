import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Slider from './screens/Slider.jsx'
import CreateCharacter from './screens/CreateCharacter.jsx';
import services from './services/characters.js'
import UpdateCharacter from './screens/UpdateCharacter.jsx'


export default function App() {

  return (

<div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Slider />}/>
        <Route path="/add-character" element={<CreateCharacter />}/>
        <Route path="/characters/:id/update" element={<UpdateCharacter />}/>
      </Routes>
    </div>
  );
}

