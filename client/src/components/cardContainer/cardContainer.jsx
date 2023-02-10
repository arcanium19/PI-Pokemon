import style from './cardContainer.module.css';
import Card from '../card/card.jsx';
import { useSelector } from 'react-redux';


function CardContainer(){

  const pokemons = useSelector(state => state.pokemons);

    return(
        <div className={style.container}>
            {
                pokemons.map(pokemon=>{
                    return <Card
                        key={pokemon.ID} 
                        ID={pokemon.ID}
                        Imagen={pokemon.Imagen}
                        Nombre={pokemon.Nombre}
                        Tipo={pokemon.Tipo}
                    />
                })
            }
        </div>
    );
}

export default CardContainer;