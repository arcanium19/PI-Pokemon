import axios from 'axios';

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_ID = "GET_POKEMON_ID";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const GET_POKEMON_TYPES = "GET_POKEMON_TYPES";
export const POST_POKEMON = "POST_POKEMON";

export const getAllPokemon = ()=>{
    return async (dispatch)=>{
        const pokemons = (await axios.get("http://localhost:3001/pokemons")).data
        dispatch({type: GET_POKEMONS, payload: pokemons})
    }
}

export const getTypes = ()=>{
    return async (dispatch)=>{
        const tipos = (await axios.get("http://localhost:3001/types")).data
        dispatch({type: GET_POKEMON_TYPES, payload: tipos})
    }
}

export const getPokemonID = (id)=>{
    return async (dispatch)=>{
        const detalle = (await axios.get(`http://localhost:3001/pokemons/${id}`)).data
        dispatch({type: GET_POKEMON_ID, payload: detalle})
    }
}

export const getPokemonName = (name)=>{
    return async (dispatch)=>{
        const pokemon = (await axios.get(`http://localhost:3001/pokemons?name=${name}`)).data
        dispatch({type: GET_POKEMON_NAME, payload: pokemon})
    }
}

export const postPokemon = (newPokemon)=>{
    return async () =>{
        await axios.post("http://localhost:3001/pokemons", newPokemon);
    }
}
