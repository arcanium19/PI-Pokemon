import style from './cardDetail.module.css';


function CardDetail(props){

    

    return (
        <div className={style.card}>
                <div className={style.nombre}><h1>{props.Nombre}</h1></div>
            <div className={style.datos}>
                <div className={style.contA}>
                    <div className={style.image}><img src={props.Imagen} alt="pokemonImagen"/></div>

                </div>
                <div className={style.contB}>
                    <div className={style.like}><h3>ID: {props.ID}</h3></div>
                    <div className={style.types}><h3>Tipo: {props.Tipo}</h3></div>
                    <div className={style.altura}><h3>Altura: {props.Altura}</h3></div>
                    <div className={style.peso}><h3>Peso: {props.Peso}</h3></div>

                </div>
                <div className={style.contC}>
                    <div className={style.hp}><h3>Vida: {props.Vida}</h3></div>
                    <div className={style.atk}><h3>Ataque: {props.Ataque}</h3></div>
                    <div className={style.def}><h3>Defensa: {props.Defensa}</h3></div>
                    <div className={style.speed}><h3>Velocidad: {props.Velocidad}</h3></div>
                </div>
            </div>
            
        </div>
    )
}

export default CardDetail;