import style from './searchContainer.module.css';
import CardDetail from '../cardDetail/cardDetail.jsx';
import { useSelector } from 'react-redux';


function SearchContainer(){

  const busqueda = useSelector(state => state.busqueda);
  
  

    return(
        <div className={style.container}>{
                busqueda.map(pokemon =>
                        <CardDetail
                        key={pokemon.ID}
                        ID={pokemon.ID}
                        Imagen={pokemon.Imagen}
                        Nombre={pokemon.Nombre}
                        Tipo={pokemon.Tipo}
                        Vida={pokemon.Vida}
                        Ataque={pokemon.Ataque}
                        Defensa={pokemon.Defensa}
                        Velocidad={pokemon.Velocidad}
                        Altura={pokemon.Altura}
                        Peso={pokemon.Peso}
                        />

                )
            }
        </div>
    );
}

export default SearchContainer;