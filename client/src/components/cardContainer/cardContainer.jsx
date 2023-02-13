import style from './cardContainer.module.css';
import Card from '../card/card.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Paginado from '../paginado/paginado';


function CardContainer(){

  let pokemons = useSelector(state => state.pokemons);

  const tipos = useSelector(state=> state.tipos)



  const [page, setPage] = useState(1);
  const items = 12;
  const [selectorType, setSelectorType] = useState({
    tipos: "0",
    az: "0",
    ataque: "0",
    database: "0",
  })

  
  const max = pokemons.length / items;

  const showPokemon = ()=>{
    if(selectorType.tipos !== "0"){
        pokemons = pokemons.filter(poke=>poke.Tipo.includes(selectorType.tipos) );
    }
    if(selectorType.az !== "0"){
        if(selectorType.az === "asc"){
        pokemons = pokemons.sort((a, b)=>{
            if(a.name.toLowerCase()>b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase()<b.name.toLowerCase()) return 1;
            return 0;
        })}else{
            pokemons = pokemons.sort((a, b)=>{
                let A = a.name.toLowerCase();
                let B = b.name.toLowerCase();

                if(A>B) return -1;
                if(A<B) return 1;
                return 0;
            }).reverse()
        }
    }

    return pokemons;
  }



    return(
        <div className={style.contpag}>
                <div className={style.selectores}>
                    <div>
                       <select name="filtroTipos" id="filtroTipos" onChange={e=>setSelectorType({...selectorType, tipos: e.target.value})}>
                           <option key="none" value={0}>Selecciona un tipo: </option>
                                {tipos.map(tipo=>{ 
                                    return <option key={tipo.Nombre} value={tipo.Nombre}>{tipo.Nombre}</option>
                                })}
                        </select>
                    </div>
                    <div>
                        <select name="apiDB"id="apiDB">
                            <option value={0}>Seleccionar filtro: </option>
                                <option  value="API">Filtrar por API</option>
                                <option  value="DB">Filtrar por DB</option>
                        </select>
                    </div>
                    <div>
                        <select name="ordenAlfabetico"id="ordenAlfabetico" onChange={e=>setSelectorType({...selectorType, az: e.target.value})}>
                            <option value={0}>Ordenar por: </option>
                                <option  value="asc">Ascendente(Z-A)</option>
                                <option  value="des">Descendente(A-Z)</option>
                        </select>
                    </div>
                    <div>
                        <select name="ordenAtaque"id="ordenAtaque">
                            <option value={0}>Ordenar por Ataque: </option>
                                <option  value="asc">Ascendente</option>
                                <option  value="des">Descendente</option>
                        </select>
                    </div>
                </div>
            <div className={style.container}>
                {
                    showPokemon().slice((page-1)*items, (page-1)*items + items).map(pokemon=>{
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
            <Paginado page={page} setPage={setPage} max={max}/>
        </div>
        
    );
}

export default CardContainer;