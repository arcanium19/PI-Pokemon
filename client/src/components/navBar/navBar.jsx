import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemonName } from '../../redux/actions';
import pokedexLogo from "../../images/pokedexprologo.png"
import style from './navBar.module.css'


function NavBar(){

    const dispatch = useDispatch();


    const[search, setSearch] = useState("");

    function handleOnChange(e){
        e.preventDefault();
        setSearch(e.target.value)
    }    

    function handleOnClic(e){
        dispatch(getPokemonName(search));
        setSearch("");
    }

    return (
        <div className={style.container}>
            <div className={style.contA}>
                <Link to="/home"><button className={style.menu1}>INICIO</button></Link>
                <Link to="/create"><button className={style.menu2}>CREAR POKEMON</button></Link>
                <Link to="/info"><button className={style.menu3}>INFO DEL PROYECTO</button></Link>
            </div>
            <div className={style.contB}>
                <img className={style.logo} src={pokedexLogo} alt="logoPokedex"/>
            </div>
            <div className={style.contC}>
                <div className={style.buscar}>
                    <input type="text" value={search} onChange={handleOnChange} placeholder='Buscar Pokemon...'/>
                    <Link to={"/search?name="+search}><button className={style.btnSearch} onClick={handleOnClic}><img className={style.imgSearch} src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt="buscar"/></button></Link>
                </div>
            </div>
            
        </div>
    );
}

export default NavBar;
