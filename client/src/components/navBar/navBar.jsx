import { Link } from 'react-router-dom';
import style from './navBar.module.css'


function NavBar(){
    return (
        <div className={style.container}>
            <div className={style.contA}>
                <Link to="/home"><button className={style.menu1}>INICIO</button></Link>
                <Link to="/create"><button className={style.menu2}>CREAR POKEMON</button></Link>
                <Link to="/info"><button className={style.menu3}>INFO DEL PROYECTO</button></Link>
            </div>
            <div className={style.contB}>
                <img className={style.logo} src="https://i.imgur.com/l8sIH.png" alt="logoPokedex"/>
            </div>
            <div className={style.contC}>
                <div className={style.buscar}>
                    <input type="text" placeholder='Buscar Pokemon...'/>
                    <button className={style.btnSearch}><img className={style.imgSearch} src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt="buscar"/></button>
                </div>
            </div>
            
        </div>
    );
}

export default NavBar;
