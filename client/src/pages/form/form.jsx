// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { getTypes } from '../../redux/actions';
import style from './form.module.css'
import FormularioPost from '../../components/formPokemon/formPokemon';

function Formulario(){


    return (
        <div className={style.container}>
            <div className={style.leftCont}></div>
            <div className={style.wrap}>
                <div className={style.fusion}>
                    <h1>CREAR POKEMON</h1>
                    <FormularioPost />
                </div>
            </div>
            <div className={style.rightCont}></div>
        </div>
    )
}

export default Formulario;