import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailContainer from '../../components/detailContainer/detailContainer.jsx';
import { getPokemonID } from '../../redux/actions';
import style from './detail.module.css';

function Detail(){
    const { id } = useParams();
    const dispatch = useDispatch();
 
    useEffect(()=>{
        dispatch(getPokemonID(id))
    }, [dispatch, id])

    return (
        <div>
            <div className={style.container}>
                <div className={style.leftCont}></div>
                <div className={style.wrap}>
                <DetailContainer />
                </div>
                <div className={style.rightCont}></div>
            </div>
        </div>


    )
}

export default Detail;
