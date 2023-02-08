import './App.css';
import { Detail, Home, Formulario, Landing, About } from './pages/index'
import NavBar from './components/navBar/navBar.jsx'
import { useLocation, Route } from 'react-router-dom';

function App() {
  const location = useLocation()
  
  return (
    <div className='App'>
      {location.pathname!=="/" && <NavBar />}
      <Route exact path="/" render={ ()=> <Landing /> } />
      <Route path="/home" render={ ()=> <Home /> } />
      <Route path="/create" render={ ()=> <Formulario /> } />
      <Route path="/detail" render={ ()=> <Detail /> } />
      <Route path="/info" render={ ()=> <About /> } />
    </div>   
 

  
  );
}

export default App;
