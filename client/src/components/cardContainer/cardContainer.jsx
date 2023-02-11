import style from './cardContainer.module.css';
import Card from '../card/card.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function CardContainer(){

  const pokemons = useSelector(state => state.pokemons);
    return(
        <div className={style.container}>
            {
                pokemons.map(pokemon=>{
                    return <Link key={"poke"+pokemon.ID} to={"/detail/"+pokemon.ID}><Card
                        key={pokemon.ID} 
                        ID={pokemon.ID}
                        Imagen={pokemon.Imagen}
                        Nombre={pokemon.Nombre}
                        Tipo={pokemon.Tipo}
                    /></Link>
                })
            }
        </div>
    );
}

export default CardContainer;