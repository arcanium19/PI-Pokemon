import style from './card.module.css';

function Card(props){
    return (
        <div className={style.card}>
            <div className={style.like}><p>{props.ID}</p></div>
            <div className={style.image}><img src={props.Imagen} alt="pokemonImagen"/></div>
            <div className={style.name}><p>{props.Nombre.charAt(0).toUpperCase() + props.Nombre.slice(1)}</p></div>
            <div className={style.types}><p>{props.Tipo.join(' ')}</p></div>
        </div>
    )
}

export default Card;