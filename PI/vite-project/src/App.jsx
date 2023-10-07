import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';
import Favorites from './components/favorites/favorites';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import PATHROUTES from './components/helpers/PathRoutes.helper';


function App() {
  // ! HOOKS
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const { pathname } = useLocation(); //puedo colocar location y luego location.pathname
  const navigate = useNavigate()

  console.log(characters);
  useEffect(() => { //es una funcion que se ejecuta con una call back, por eso no se declara
    !access && navigate("/");
  }, [access]);

  // ! 
  const username = "admin@mail.com";
  const password = "admin123";

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== Number(id))
    )
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas")
    }
  };

  // ! RENDER
  return (
    <div>
      
      {pathname !== "/" && <Nav />}
     
      <div className='container'>
        <Routes>
          <Route path="/" element={<Form login={login} />} />
        </Routes>

        <Routes>
          <Route path={PATHROUTES.HOME} element={<SearchBar onSearch={onSearch}/>} /> {/* Le enviamos al componente SearchBar com prop la funcion que modifica el estado */}
        </Routes>

        <Routes>
          <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />
          <Route path={PATHROUTES.ABOUT} element={<About />} />
          <Route path={PATHROUTES.DETAIL} element={<Favorites />} />
          <Route path={PATHROUTES.FAVORITES} element={<Detail />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;