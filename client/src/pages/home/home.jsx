import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardContainer from '../../components/cardContainer/cardContainer';
import { getAllPokemon, getTypes } from '../../redux/actions';
import style from './home.module.css';

function Home(){

    const dispatch = useDispatch();
    
    const tipos = useSelector(state=> state.tipos)


    useEffect(()=>{
        dispatch(getAllPokemon())
        if(tipos.length === 0){
            dispatch(getTypes())}
        }, [tipos.length, dispatch])

    return (
        <div className={style.container}>
            <div className={style.leftCont}></div>
            <div className={style.wrap}><h1>Bienvenidos a HOME</h1><br></br>
            <CardContainer />
            </div>
            <div className={style.rightCont}></div>
        </div>
    );
}

export default Home;