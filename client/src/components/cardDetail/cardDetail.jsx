import style from './cardDetail.module.css';


function CardDetail(props){

    

    return (
        <div className={style.card}>
            <div className={style.like}><p>{props.ID}</p></div>
            <div className={style.image}><img src={props.Imagen} alt="pokemonImagen"/></div>
            <div className={style.name}><p>{props.Nombre}</p></div>
            <div className={style.types}><p>{props.Tipo}</p></div>
            <div className={style.hp}><p>{props.Vida}</p></div>
            <div className={style.atk}><p>{props.Ataque}</p></div>
            <div className={style.def}><p>{props.Defensa}</p></div>
            <div className={style.speed}><p>{props.Velocidad}</p></div>
            <div className={style.altura}><p>{props.Altura}</p></div>
            <div className={style.peso}><p>{props.Peso}</p></div>
            
        </div>
    )
}

export default CardDetail;