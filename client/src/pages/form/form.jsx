// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { getTypes } from '../../redux/actions';
import style from './form.module.css'
import FormularioPost from '../../components/formPokemon/formPokemon';

function Formulario(){

    // const dispatch = useDispatch();
    
    // const tipos = useSelector(state=> state.tipos)

    // useEffect(()=>{
    //     if(tipos.length === 0){
    //     dispatch(getTypes())}
    // }, [tipos.length, dispatch])


  
    return (
        <div className={style.container}>
            <div className={style.leftCont}></div>
            <div className={style.wrap}>
                <h1>CREAR POKEMON</h1>
                <FormularioPost />











                {/* <div className={style.containerPost}>
                    <div>
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/1/1b/latest/20220601141019/Profesor_Turo.png" width="30%" alt="profPokemon"/>
                    </div>
                    <div>
                        <form className={style.formulario}>
                            <div className={style.containerform}>
                                <div className={style.form__group}>
                                    <label htmlFor="name" className={style.form__label}>NOMBRE:</label>
                                    <input type="text" id="name" className={style.form__input} placeholder=" "></input>
                                    <span className={style.form__line}></span>
                                </div>
                                <div className={style.form__group}>
                                    <label htmlFor="hp" className={style.form__label}>VIDA:</label>
                                    <input type="text" id="hp" className={style.form__input} placeholder=" "></input>
                                    <span className={style.form__line}></span>
                                </div>
                                <div className={style.form__group}>
                                    <label htmlFor="atk" className={style.form__label}>ATAQUE:</label>
                                    <input type="text" id="atk" className={style.form__input} placeholder=" "></input>
                                    <span className={style.form__line}></span>
                                </div>
                                <div className={style.form__group}>
                                    <label htmlFor="def" className={style.form__label}>DEFENSA:</label>
                                    <input type="text" id="def" className={style.form__input} placeholder=" "></input>
                                    <span className={style.form__line}></span>
                                </div>
                                <div className={style.form__group}>
                                    <label htmlFor="speed" className={style.form__label}>VELOCIDAD:</label>
                                    <input type="text" id="speed" className={style.form__input} placeholder=" "></input>
                                    <span className={style.form__line}></span>
                                </div>
                                <div className={style.form__group}>
                                    <label htmlFor="altura" className={style.form__label}>ALTURA:</label>
                                    <input type="text" id="altura" className={style.form__input} placeholder=" "></input>
                                    <span className={style.form__line}></span>
                                </div>
                                <div className={style.form__group}>
                                    <label htmlFor="peso" className={style.form__label}>PESO:</label>
                                    <input type="text" id="peso" className={style.form__input} placeholder=" "></input>
                                    <span className={style.form__line}></span>
                                </div>
                                <div className={style.form__group}>
                                    <label htmlFor="imgURL" className={style.form__label}>IMAGEN:</label>
                                    <input type="text" id="imgURL" className={style.form__input} placeholder=" "></input>
                                    <span className={style.form__line}></span>
                                </div>
                                <div>
                                    <select name="Tipo1"id="Tipo1">
                                        <option key="none" value="none">Selecciona un tipo</option>
                                            {tipos.map(tipo=>{ 
                                                return <option key={tipo.Nombre} value={tipo.Nombre}>{tipo.Nombre}</option>
                                            })}
                                    </select>
                                </div>
                                <div>
                                    <select name="Tipo2"id="Tipo2">
                                        <option key="none2" value="none2">Selecciona un tipo</option>
                                            {tipos.map(tipo=>{ 
                                                return <option key={tipo.Nombre} value={tipo.Nombre}>{tipo.Nombre}</option>
                                            })}
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>
            <div className={style.rightCont}></div>
        </div>
    )
}

export default Formulario;