import style from './landing.module.css'
import {Link} from 'react-router-dom'

function Landing(){
    return (
        <div className={style.welcome}>
            <img className={style.logo} src="https://i.imgur.com/l8sIH.png" alt="Logo"/>
            <Link to="/home" margin="8%">
                <button className={style.btnwelcome}>INGRESAR</button>
            </Link>
        </div>
    );
}

export default Landing;