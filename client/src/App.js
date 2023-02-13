import './App.css';
import { Detail, Home, Formulario, Landing, About, Search } from './pages/index'
import NavBar from './components/navBar/navBar.jsx'
import { useLocation, Route } from 'react-router-dom';

function App() {
  const location = useLocation()
  
  return (
    <div className='App'>
      {location.pathname!=="/" && <NavBar />}
      <Route exact path="/" render={ ()=> <Landing /> } />
      <Route exact path="/home" render={ ()=> <Home /> } />
      <Route exact path="/create" render={ ()=> <Formulario /> } />
      <Route exact path="/detail/:id" render={ ()=> <Detail /> } />
      <Route exact path="/info" render={ ()=> <About /> } />
      <Route path="/search" render={ ()=> <Search /> } />
    </div>   
 

  
  );
}

export default App;
