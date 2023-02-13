import style from './detailContainer.module.css';
import CardDetail from '../cardDetail/cardDetail.jsx';
import { useSelector } from 'react-redux';


function DetailContainer(){

  const detalle = useSelector(state => state.detalle);
  

    return(
        <div className={style.container}>
            
                
                        <CardDetail
                        ID={detalle.ID}
                        Imagen={detalle.Imagen}
                        Nombre={detalle.Nombre}
                        Tipo={detalle.Tipo}
                        Vida={detalle.Vida}
                        Ataque={detalle.Ataque}
                        Defensa={detalle.Defensa}
                        Velocidad={detalle.Velocidad}
                        Altura={detalle.Altura}
                        Peso={detalle.Peso}
                        />

                
            
        </div>
    );
}

export default DetailContainer;